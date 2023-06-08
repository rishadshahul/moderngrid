from django.conf.urls import url

from studentapp import views

urlpatterns=[
    url(r'^studentAPI/$',views.studentAPI),
    url(r'^studentAPI/([0-9]+)$',views.studentAPI),
]