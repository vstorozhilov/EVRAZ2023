import time
import telebot

from django.core.management.base import BaseCommand

from main.models import TGChat, Signal, DataItem, TGMessage


TELEGRAM_TOKEN = '5990792027:AAEHjNWLiMqZv4k813Yy54sVXAo1vp-I4PY'


class Command(BaseCommand):

    def handle(self, *args, **options):

        tg_offset = 0
        if TGMessage.objects.exists():
            tg_offset = TGMessage.objects.order_by('-update_id').first().update_id + 1

        kafka_offset = DataItem.objects.order_by('-offset').first().offset

        tb = telebot.TeleBot(TELEGRAM_TOKEN)
        while True:

            # get updates
            updates = tb.get_updates(tg_offset)
            for update in updates:

                TGMessage.objects.create(update_id=update.update_id)
                tg_offset = update.update_id + 1

                chat_id = update.message.chat.id
                if not TGChat.objects.filter(chat_id=chat_id).exists():
                    TGChat.objects.create(chat_id=chat_id)
                    tb.send_message(chat_id, 'Вы подписались на уведомления от эксгаустеров в Евразе')

            last_data_offset = DataItem.objects.order_by('-offset').first().offset
            if last_data_offset == kafka_offset:
                continue

            kafka_offset = last_data_offset

            # calculate signals
            signals = Signal.objects.filter(active=True)
            variables = []
            for signal in signals:
                variables += signal.variables
            variables = list(set(variables))

            variables_dict = {}
            for data_item in DataItem.objects.filter(key__in=variables, offset=last_data_offset):
                variables_dict[data_item.key] = data_item.value

            alert_signals = []
            for signal in Signal.objects.filter(active=True):
                formula = signal.formula
                for key, value in variables_dict.items():
                    formula = formula.replace(key, str(value))
                signal_value = eval(formula)
                if signal.max_alert_value is not None and signal_value > signal.max_alert_value:
                    alert_signals.append(signal.name)
                elif signal.min_alert_value is not None and signal_value < signal.min_alert_value:
                    alert_signals.append(signal.name)

            if alert_signals:
                alert = ', '.join(alert_signals)
                for chat in TGChat.objects.all():
                    tb.send_message(chat.chat_id, f'Выход за пределы значений на сигналах: {alert}')
