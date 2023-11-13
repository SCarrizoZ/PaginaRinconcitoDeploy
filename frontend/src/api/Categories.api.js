import { apiUrl } from "../../config";

export const getCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categorias?populate=*`);
    console.log(response.data)
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al obtener las categorías:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
};
