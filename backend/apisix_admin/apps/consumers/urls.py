from django.urls import re_path
from .views import ConsumerViewSet

app_name = "consumers"


urlpatterns = [
    re_path(r'list/', ConsumerViewSet.as_view({"get": "list"})),
    re_path(r'', ConsumerViewSet.as_view({"post": "create", "get": "list"})),
    re_path(r'(?P<pk>\d+)$', ConsumerViewSet.as_view({'get': 'retrieve', 'put': 'update', "delete": "destroy"})),
]
