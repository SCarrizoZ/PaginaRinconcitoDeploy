from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_product(request, name):
    product = Product.objects.get(name=name)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def create_product(request):
    if request.user.is_staff:
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(
            "No esta autorizado para crear un producto",
            status=status.HTTP_401_UNAUTHORIZED,
        )


@api_view(["PUT"])
def edit_product(request, pk):
    product = Product.objects.get(id=pk)
    if request.user.is_staff:
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(
            "No esta autorizado para editar un producto",
            status=status.HTTP_401_UNAUTHORIZED,
        )


@api_view(["DELETE"])
def delete_product(request, pk):
    product = Product.objects.get(id=pk)
    if request.user.is_staff:
        product.delete()
        return Response("Producto eliminado", status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(
            "No esta autorizado para eliminar este producto",
            status=status.HTTP_401_UNAUTHORIZED,
        )
