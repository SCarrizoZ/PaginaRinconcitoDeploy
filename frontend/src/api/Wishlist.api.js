import axios from 'axios';
import { apiUrl } from '../../config';
import { getUser, getToken } from '../utils';

export const getWishlist = async () => {
  const user = getUser();
  const token = getToken();

  if (user && token) {
    try {
      const response = await axios.get(
        `${apiUrl}/lista-deseos`,
        {
          params: {
            'populate[0]': 'users_permissions_user',
            'filters[users_permissions_user][id][$eq]': user.id,
            'populate[productos][populate]': '*',
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      return null;
    }
  } else {
    return null;
  }
};

export const createWishlist = async ({ token, user }) => {

  if (user && token) {
    try {
      const response = await axios.post(
        `${apiUrl}/lista-deseos`,
        {
          data: {
            users_permissions_user: user.id,
            productos: [],
            nombre: `Lista de deseos de ${user.username}`,
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      return null;
    }
  } else {
    return null;
  }
}

// add item to wishlist
export const addItem = async ({ productId, wishlistId }) => {
  const user = getUser();
  const token = getToken();

  if (user && token) {
    try {
      const response = await axios.put(
        `${apiUrl}/lista-deseos/${wishlistId}`,
        {
          data: {
            productos: {
              connect: [productId]
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      return null;
    }
  } else {
    return null;
  }
};

// remove item from wishlist
export const removeItem = async ({ productId, wishlistId }) => {
  const user = getUser();
  const token = getToken();

  if (user && token) {
    try {
      const response = await axios.put(
        `${apiUrl}/lista-deseos/${wishlistId}`,
        {
          data: {
            productos: {
              disconnect: [productId]
            }
          }
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      return null;
    }
  } else {
    return null;
  }
};  