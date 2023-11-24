import { apiUrl } from "../../config";

export const getCategories = async () => {
  const ejemploCategorias = {
    "data": [
      {
        "id": 1,
        "attributes": {
          "nombre": "Vinilos",
          "subcategorias": {
            "data": [
              {
                "id": 3,
                "attributes": {
                  "nombre": "Pop"
                }
              },
              {
                "id": 4,
                "attributes": {
                  "nombre": "Hip Hop"
                }
              },
              {
                "id": 10,
                "attributes": {
                  "nombre": "Rock"
                }
              }
            ]
          }
        }
      },
      {
        "id": 2,
        "attributes": {
          "nombre": "Guitarras",
          "subcategorias": {
            "data": [
              {
                "id": 1,
                "attributes": {
                  "nombre": "Guitarras Acústicas"
                }
              },
              {
                "id": 2,
                "attributes": {
                  "nombre": "Guitarras Eléctricas"
                }
              }
            ]
          }
        }
      },
      {
        "id": 3,
        "attributes": {
          "nombre": "Teclados y Pianos",
          "subcategorias": {
            "data": [
              {
                "id": 5,
                "attributes": {
                  "nombre": "Teclados"
                }
              }
            ]
          }
        }
      },
      {
        "id": 4,
        "attributes": {
          "nombre": "Tocadiscos y Tornamesas",
          "subcategorias": {
            "data": [
              {
                "id": 6,
                "attributes": {
                  "nombre": "Tocadiscos"
                }
              }
            ]
          }
        }
      },
      {
        "id": 5,
        "attributes": {
          "nombre": "Percusión",
          "subcategorias": {
            "data": [
              {
                "id": 9,
                "attributes": {
                  "nombre": "Parches"
                }
              }
            ]
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
  };

  return ejemploCategorias

  // try {
  //   const response = await fetch(`${apiUrl}/categorias?fields[0]=nombre&populate[subcategorias][fields][0]=nombre`);
  //   console.log(response.data)
  //   if (response.ok) {
  //     const data = await response.json();
  //     return data;
  //   } else {
  //     console.error("Error al obtener las categorías:", response.status, response.statusText);
  //     return null;
  //   }
  // } catch (error) {
  //   console.error("Error en la solicitud:", error);
  //   return null;
  // }
};
