// FETCH API
export const getProducts = async ()=>{
  const response = await fetch("https://rinconcito-pruebas-api.onrender.com/products/api/v1/products/")
  const data = await response.json()
  return data
}



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