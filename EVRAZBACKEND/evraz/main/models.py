import re
from django.db import models

VARIABLE_RE = re.compile(r'SM_Exgauster\\\[\d+\:\d+\]')

class DataItem(models.Model):

    moment = models.DateTimeField()
    offset = models.BigIntegerField()
    key = models.CharField(max_length=1024)
    value = models.FloatField(null=True)


class Signal(models.Model):

    name = models.CharField(max_length=1024)
    formula = models.TextField()
    active = models.BooleanField(default=True)
    min_alert_value = models.FloatField(null=True, blank=True)
    max_alert_value = models.FloatField(null=True, blank=True)

    @property
    def variables(self):
        return VARIABLE_RE.findall(self.formula)


class TGMessage(models.Model):
    update_id = models.BigIntegerField()


class TGChat(models.Model):
    chat_id = models.TextField()
