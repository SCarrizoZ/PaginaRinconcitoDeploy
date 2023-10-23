from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_products, name="products"),
    path("get/<str:name>/", views.get_product, name="product"),
    path("post/", views.create_product, name="create_product"),
    path("edit/<int:pk>/", views.edit_product, name="edit_product"),
    path("delete/<int:pk>/", views.delete_product, name="delete_product"),
]
