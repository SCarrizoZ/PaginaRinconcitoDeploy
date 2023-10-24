from rest_framework import permissions


class IsStaffOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # Permite lectura para todos los usuarios
        if request.method in permissions.SAFE_METHODS:
            return True
        # Requiere que el usuario esté autenticado y sea staff para otras operaciones
        return request.user.is_staff
