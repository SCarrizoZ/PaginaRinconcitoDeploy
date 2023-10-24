from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets
from .models import Product
from .serializers import ProductSerializer
from .permissions import IsStaffOrReadOnly


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsStaffOrReadOnly]

    def perform_create(self, serializer):
        # Asigna el usuario actual que hizo la solicitud como propietario del producto
        serializer.save(user=self.request.user)
