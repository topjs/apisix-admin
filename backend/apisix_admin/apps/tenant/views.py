from rest_framework import viewsets, mixins
from .models import Tenant, TenantGroup
from .serializers import TenantSerializer, TenantGroupSerializer


class TenantGroupViewSet(viewsets.ModelViewSet):
    """
    管理员: 拥有所有的apisix集群权限
    普通用户: 只拥有分配给这个用户的权限
    """
    serializer_class = TenantGroupSerializer
    queryset = TenantGroup.objects.all()

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Tenant.objects.all()
        return TenantGroup.objects.filter(user_id__exact=self.request.user.id)

    def get_serializer_class(self):
        if self.request.user.is_superuser:
            return TenantSerializer
        return TenantGroupSerializer