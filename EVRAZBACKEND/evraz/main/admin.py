from django.contrib import admin

from .models import DataItem, Signal


class DataItemAdmin(admin.ModelAdmin):
    list_display = ('offset', 'moment', 'key', 'value')


class SignalAdmin(admin.ModelAdmin):
    list_display = ('name', 'formula', 'min_alert_value', 'max_alert_value')


admin.site.register(DataItem, DataItemAdmin)
admin.site.register(Signal, SignalAdmin)
