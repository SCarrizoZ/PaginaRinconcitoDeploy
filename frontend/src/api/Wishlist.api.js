import axios from 'axios';
import { apiUrl } from '../../config';



// export const getWishlist = async () => {
//   const user = getUser()
//   const token = getToken()
//   if (user && token) {
//     try {
//       const response = await axios.get(`${apiUrl}/lista-deseos?user=${user.id}`)
//       return response.data
//     } catch (error) {
//       console.log(error)
//       return null
//     }
//   } else {
//     return null
//   }
// }