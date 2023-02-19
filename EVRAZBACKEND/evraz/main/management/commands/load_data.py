import json
import pytz
from datetime import datetime

from django.core.management.base import BaseCommand
from django.conf import settings

from main.models import DataItem

from kafka import KafkaConsumer
from kafka.structs import TopicPartition

host = 'rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091'
topic = 'zsmk-9433-dev-01'
user = '9433_reader'
password = 'eUIpgWu0PWTJaTrjhjQD3.hoyhntiK'

CA_FILE = settings.BASE_DIR.parent / 'CA.txt'


class Command(BaseCommand):

    def handle(self, *args, **options):

        consumer = KafkaConsumer(
            # topic,
            group_id='Команда-2023',
            sasl_mechanism='SCRAM-SHA-512',
            security_protocol="SASL_SSL",
            sasl_plain_username=user,
            sasl_plain_password=password,
            bootstrap_servers=host,
            # ssl_cafile='CA.txt',
            ssl_cafile=CA_FILE,
            auto_offset_reset='earliest',
        )

        # offset = 0
        # if DataItem.objects.exists():
        #     offset = DataItem.objects.order_by('-offset').first().offset - 5

        consumer.assign([TopicPartition(topic, 0)])
        # consumer.seek(partition=TopicPartition(topic, 0), offset=offset)

        for message in consumer:

            data = json.loads(message.value.decode('utf-8'))
            moment = datetime.fromisoformat(data.pop('moment'))
            moment = moment.replace(tzinfo=pytz.UTC)

            if DataItem.objects.filter(offset=message.offset).exists():
                print('already exists', message.offset)
                continue

            data_items = []
            for key, value in data.items():
                data_item = DataItem(
                    moment=moment,
                    offset=message.offset,
                    key=key,
                    value=value
                )
                data_items.append(data_item)

            DataItem.objects.bulk_create(data_items)

            print(message.offset, moment)
