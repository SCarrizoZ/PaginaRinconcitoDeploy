// FETCH API
export const getProducts = async () => {
  try {
    const response = await fetch("https://rinconcito-strapi.onrender.com/api/productos?populate[portada][fields][0]=url&populate[subcategoria][fields][0]=nombre");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al obtener los productos:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
};




// AXIOS 

// import axios from 'axios'
// const ProductsApi = axios.create({
//   baseURL:'http://localhost:8000/Products/api/v1/Products/'
// })
// export const getAllProducts = ()=>{
//   return ProductsApi.get("/")
// }
// export const createTask=(task)=>{
//   return ProductsApi.post('/',task)
// }
// export const deleteTask=(id)=>{
//   ProductsApi.delete(`/${id}`)
// }
// export const updateTask = (id,task)=>{
//   return ProductsApi.put(`/${id}/`,task)
// }
// export const getTask=(id)=>{
//   return ProductsApi.get(`/${id}`)