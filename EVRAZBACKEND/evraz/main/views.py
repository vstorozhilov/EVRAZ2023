import re
from collections import defaultdict

from django.shortcuts import render
from django.http import JsonResponse

from .models import DataItem, Signal

from math import log, exp, log2, log10


def unique_keys_view(request):
    result = DataItem.objects.order_by().values('key').distinct()
    result = [item['key'] for item in result]
    return JsonResponse({'unique': result})


def get_values_view(request):
    items = DataItem.objects.all()

    signals_names = request.GET.get('signals')

    keys_names = request.GET.get('keys')
    if keys_names:
        keys = keys_names.split(',')
        if signals_names:
            signals = Signal.objects.filter(name__in=signals_names.split(','))
            for signal in signals:
                keys += signal.variables
            keys = list(set(keys))
        items = items.filter(key__in=keys)

    n = request.GET.get('n', 120)
    n = int(n)
    max_offset = DataItem.objects.order_by('-offset').first().offset
    from_offset = max_offset - n
    items = items.filter(offset__gt=from_offset)

    result = defaultdict(list)
    for item in items.order_by('offset'):
        moment = int(item.moment.timestamp())
        if not result['moment']:
            result['moment'].append(moment)
        elif result['moment'][-1] != moment:
            result['moment'].append(moment)
        result[item.key].append(item.value)

    keys = [key for key in result.keys() if key != 'moment']

    if signals_names:
        signals = Signal.objects.filter(name__in=signals_names.split(','))
        for signal in signals:
            for i, moment in enumerate(result['moment']):
                formula = signal.formula
                for key in keys:
                    if key == 'moment':
                        continue

                    formula = formula.replace(key, str(result[key][i]))
                try:
                    result[signal.name].append(eval(formula))
                except Exception as e:
                    print(e)

    return JsonResponse(result)
