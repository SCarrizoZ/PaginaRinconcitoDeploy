import { apiUrl } from "../../config";

// FETCH API
export const getProducts = async () => {
  const ejemploProductos = {
    "data": [
      {
        "id": 1,
        "attributes": {
          "nombre": "Guitarra Acústica Alhambra 3C concierto",
          "descripcion": "La guitarra Alhambra modelo 3C es una guitarra preciosa. Hecha a mano y cuidando todos los detalles, significa un paso más en la línea de estudio, un instrumento robusto, versátil y con un tono maravilloso.",
          "precio": "699900",
          "stock": 10,
          "es_despachable": false,
          "createdAt": "2023-11-01T00:29:51.971Z",
          "updatedAt": "2023-11-01T00:30:04.821Z",
          "publishedAt": "2023-11-01T00:30:04.471Z",
          "portada": {
            "data": {
              "id": 1,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698798548/Guitarra_Acustica_e2efb9b528.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 1,
              "attributes": {
                "nombre": "Guitarras Acústicas"
              }
            }
          },
          "marca": {
            "data": {
              "id": 1,
              "attributes": {
                "nombre": "Alhambra"
              }
            }
          }
        }
      },
      {
        "id": 9,
        "attributes": {
          "nombre": "SHAKIRA - Laundry Service",
          "descripcion": "2021 marca el vigésimo aniversario del exitoso álbum crossover de Shakira, Servicio de lavandería. Lanzado originalmente el 13 de noviembre de 2001, el álbum fue escrito y producido por Shakira y presenta el sencillo número 1, \"Suerte/Whenever, Wherever\", \"Objection (Tango)\" y \"Underneath Your Clothes\". ",
          "precio": "46000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T02:20:55.426Z",
          "updatedAt": "2023-11-14T02:21:08.446Z",
          "publishedAt": "2023-11-14T02:21:08.093Z",
          "portada": {
            "data": {
              "id": 9,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699928244/06c2ca_978aef2b185e418a8c6c6c34f93ba529_mv2_c03b7b939d.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 3,
              "attributes": {
                "nombre": "Pop"
              }
            }
          },
          "marca": {
            "data": null
          }
        }
      },
      {
        "id": 3,
        "attributes": {
          "nombre": "Guitarra Eléctrica Ibanez GRG140 SB",
          "descripcion": "La serie GIO está diseñada para músicos que quieren la calidad de Ibanez en una versión más asequible. Y esta vez Ibanez vuelve al ataque con la GRG140 que es la guitarra perfecta para principiantes que buscan un instrumento sólido y confiable.",
          "precio": "299900",
          "stock": 1,
          "es_despachable": false,
          "createdAt": "2023-11-01T06:54:43.800Z",
          "updatedAt": "2023-11-01T06:55:47.463Z",
          "publishedAt": "2023-11-01T06:55:47.093Z",
          "portada": {
            "data": {
              "id": 3,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698821715/Guitarra_Electrica2_a2d7e095f6.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 2,
              "attributes": {
                "nombre": "Guitarras Eléctricas"
              }
            }
          },
          "marca": {
            "data": {
              "id": 2,
              "attributes": {
                "nombre": "Ibanez"
              }
            }
          }
        }
      },
      {
        "id": 4,
        "attributes": {
          "nombre": "Guitarra Acústica Alhambra college",
          "descripcion": "La guitarra Alhambra College es un instrumento para principiantes, de muy buena calidad y muy asequible. Con una tapa maciza de Cedro, el modelo College es una opción segura para principiantes con una relación calidad-precio excelente.",
          "precio": "349900",
          "stock": 5,
          "es_despachable": false,
          "createdAt": "2023-11-01T06:57:19.439Z",
          "updatedAt": "2023-11-01T06:57:31.534Z",
          "publishedAt": "2023-11-01T06:57:31.183Z",
          "portada": {
            "data": {
              "id": 4,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698821811/Guitarra_Acustica2_c192aa3473.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 1,
              "attributes": {
                "nombre": "Guitarras Acústicas"
              }
            }
          },
          "marca": {
            "data": {
              "id": 1,
              "attributes": {
                "nombre": "Alhambra"
              }
            }
          }
        }
      },
      {
        "id": 5,
        "attributes": {
          "nombre": "THE WEEKND - The Highlights",
          "descripcion": "The Highlights es el segundo álbum recopilatorio del cantante canadiense The Weeknd. Fue lanzado el 5 de febrero de 2021 y sigue al lanzamiento de su cuarto álbum de estudio After Hours de 2020.",
          "precio": "54000",
          "stock": 5,
          "es_despachable": true,
          "createdAt": "2023-11-01T07:05:12.114Z",
          "updatedAt": "2023-11-01T07:05:25.730Z",
          "publishedAt": "2023-11-01T07:05:25.377Z",
          "portada": {
            "data": {
              "id": 5,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698822285/The_Weeknd_06d4c3720c.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 3,
              "attributes": {
                "nombre": "Pop"
              }
            }
          },
          "marca": {
            "data": null
          }
        }
      }
    ],
    "meta": {
      "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 24
      }
    }
  }
  return ejemploProductos

  // try {
  //   const response = await fetch(`${apiUrl}/productos?populate[portada][fields][0]=url&populate[subcategoria][fields][0]=nombre&populate[marca][fields][0]=nombre`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     return data;
  //   } else {
  //     console.error("Error al obtener los productos:", response.status, response.statusText);
  //     return null;
  //   }
  // } catch (error) {
  //   console.error("Error en la solicitud:", error);
  //   return null;
  // }
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