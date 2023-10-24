from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"products", views.ProductViewSet, basename="products")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="API de Productos")),
]
