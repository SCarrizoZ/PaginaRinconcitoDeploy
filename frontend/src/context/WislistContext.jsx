import { createContext, useState, useEffect, useContext } from 'react';
import { getWishlist, addItem, removeItem } from '../api/Wishlist.api';
import { getUser } from '../utils';
import { ToastContext } from '../context/ToastProvider';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Estado del producto
  const [wishlist, setWishlist] = useState([]);
  // Estado de inicio de sesión
  const [isLoggedInWishlist, setIsLoggedInWishlist] = useState(!!getUser());
  const showToast = useContext(ToastContext);

  // Método para actualizar la lista de deseos
  const updateWishlist = async () => {
    if (isLoggedInWishlist) {
      const data = await getWishlist();
      setWishlist(data);
    }
  };

  const addToWishlist = async (id) => {
    try {
      const wishlistItem = wishlist?.data?.[0]?.attributes?.productos?.data.find((item) => item.id === id);

      if (wishlistItem) {
        await removeItem({ productId: id, wishlistId: wishlist?.data?.[0]?.id });
        showToast('Producto eliminado de la lista de deseos', 'success');
      } else {
        if (!isLoggedInWishlist) {
          showToast('Inicia sesión para añadir a la lista de deseos', 'info');
          return;
        }
        await addItem({ productId: id, wishlistId: wishlist?.data?.[0]?.id });
        showToast('Producto añadido a la lista de deseos', 'success');
      }
    } catch (error) {
      console.error('Error agregando a la lista de deseos:', error);
      showToast('Error al añadir a la lista de deseos', 'error');
    } finally {
      await updateWishlist();
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      await removeItem({ productId: id, wishlistId: wishlist?.data?.[0]?.id });
      showToast('Producto eliminado de la lista de deseos', 'success');
    } catch (error) {
      console.error('Error eliminando de la lista de deseos:', error);
      showToast('Error al eliminar de la lista de deseos', 'error');
    } finally {
      await updateWishlist();
    }
  };

  // Efecto para cargar la lista de deseos al montar el componente
  useEffect(() => {
    async function fetchWishlist() {
      await updateWishlist();
    }

    fetchWishlist();
  }, []);

  // Efecto para actualizar la lista de deseos cuando el usuario inicie sesión
  useEffect(() => {
    // Escuchar cambios en el estado de inicio de sesión
    updateWishlist();
  }, [isLoggedInWishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setIsLoggedInWishlist, setWishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useWishlist = () => {
  return useContext(WishlistContext);
};

export default WishlistProvider;
