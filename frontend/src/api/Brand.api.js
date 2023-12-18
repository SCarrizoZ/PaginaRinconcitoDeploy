import { apiUrl } from "../../config";

export const getBrands = async () => {
  // const ejemploMarcas = {
  //   "data": [
  //     {
  //       "id": 1,
  //       "attributes": {
  //         "nombre": "Alhambra"
  //       }
  //     },
  //     {
  //       "id": 2,
  //       "attributes": {
  //         "nombre": "Ibanez"
  //       }
  //     },
  //     {
  //       "id": 3,
  //       "attributes": {
  //         "nombre": "Fender"
  //       }
  //     },
  //     {
  //       "id": 4,
  //       "attributes": {
  //         "nombre": "Marshall"
  //       }
  //     },
  //     {
  //       "id": 5,
  //       "attributes": {
  //         "nombre": "Takamine"
  //       }
  //     },
  //     {
  //       "id": 6,
  //       "attributes": {
  //         "nombre": "Washburn"
  //       }
  //     },
  //     {
  //       "id": 7,
  //       "attributes": {
  //         "nombre": "Ernie ball"
  //       }
  //     },
  //     {
  //       "id": 8,
  //       "attributes": {
  //         "nombre": "Boss"
  //       }
  //     },
  //     {
  //       "id": 9,
  //       "attributes": {
  //         "nombre": "Audio-Technica"
  //       }
  //     },
  //     {
  //       "id": 10,
  //       "attributes": {
  //         "nombre": "Casio"
  //       }
  //     },
  //     {
  //       "id": 11,
  //       "attributes": {
  //         "nombre": "Yamaha"
  //       }
  //     },
  //     {
  //       "id": 12,
  //       "attributes": {
  //         "nombre": "Evans"
  //       }
  //     }
  //   ],
  //   "meta": {
  //     "pagination": {
  //       "page": 1,
  //       "pageSize": 25,
  //       "pageCount": 1,
  //       "total": 24
  //     }
  //   }
  // };
  // return ejemploMarcas
  try {
    const response = await fetch(`${apiUrl}/marcas?fields[0]=nombre&populate[logo][fields][0]=url`);
    // console.log(response.data)
    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      return data;
    } else {
      console.error("Error al obtener las marcas:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return null;
  }
};
