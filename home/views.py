from django.shortcuts import render
from .data import sidebar_data, footer_data, subnavbar_data


def home(request):
    return render(request, 'index.html',{
        "sidebar_data": sidebar_data,
        "footer_data": footer_data,
        "subnavbar_data": subnavbar_data,
    })
