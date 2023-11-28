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
      },
      {
        "id": 6,
        "attributes": {
          "nombre": "50 CENT – Best Of 50",
          "descripcion": "Primer álbum de grandes éxitos del rapero estadounidense 50 Cent. Fue lanzado el 31 de marzo de 2017 por Shady Records,  Aftermath Entertainment e Interscope Records. incluye temas de cinco de sus álbumes de estudio anteriores: Power of the Dollar  (2000), Get Rich or Die Tryin' (2003), The Massacre  (2005),  Curtis  (2007) y Before I Self Destruct (2009). ).  ",
          "precio": "44000",
          "stock": 16,
          "es_despachable": true,
          "createdAt": "2023-11-01T07:06:52.317Z",
          "updatedAt": "2023-11-01T07:07:04.825Z",
          "publishedAt": "2023-11-01T07:07:04.473Z",
          "portada": {
            "data": {
              "id": 6,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698822385/50cent_9d8b3dd078.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 4,
              "attributes": {
                "nombre": "Hip Hop"
              }
            }
          },
          "marca": {
            "data": null
          }
        }
      },
      {
        "id": 2,
        "attributes": {
          "nombre": "Guitarra Eléctrica Ibanez PS60 Iceman - Black",
          "descripcion": "La serie Signature se compone de varios modelos de Ibanez que se adaptaron a las necesidades del artista mediante el uso de modificaciones más o menos extensas en consecuencia. La idea básica de una guitarra Signature es que el artista en cuestión puede reemplazar \"su\" guitarra si es necesario en casi cualquier lugar y, por otro lado, puedes tocar el mismo modelo que tu ídolo. Muchas características de las guitarras Signature ahora han llegado a la producción en serie.\nLa PS60 es un modelo de guitarra eléctrica de cuerpo sólido, característico del guitarrista Paul Stanley de la banda   estadounidense de hard rock KISS.",
          "precio": "459900",
          "stock": 7,
          "es_despachable": false,
          "createdAt": "2023-11-01T06:52:27.197Z",
          "updatedAt": "2023-11-14T02:30:08.703Z",
          "publishedAt": "2023-11-01T06:52:39.713Z",
          "portada": {
            "data": {
              "id": 2,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1698821431/Guitarra_Electrica1_cb33e2a657.jpg"
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
        "id": 7,
        "attributes": {
          "nombre": "Teclado CASIO CTX800",
          "descripcion": "La serie CT-X viene con la fuente de sonido AiX, que puede producir una amplia gama de sonidos, desde graves potentes hasta tonos más fuertes y claros. El poder excepcional de la LSI de alto rendimiento reproduce el encanto natural de los sonidos de instrumentos acústicos, como el cambio agradable en el tono de una tecla de piano presionada, la sensación de un tambor o el desempeño de las cuerdas.",
          "precio": "389900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T01:25:38.642Z",
          "updatedAt": "2023-11-14T01:27:22.791Z",
          "publishedAt": "2023-11-14T01:25:49.578Z",
          "portada": {
            "data": {
              "id": 7,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699924770/06c2ca_125e8c8cf829463a88a89db737e53271_mv2_0454759ec4.jpg"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 5,
              "attributes": {
                "nombre": "Teclados"
              }
            }
          },
          "marca": {
            "data": {
              "id": 10,
              "attributes": {
                "nombre": "Casio"
              }
            }
          }
        }
      },
      {
        "id": 8,
        "attributes": {
          "nombre": "Tocadiscos audio-technica AT140XP",
          "descripcion": "AT-LP140XP\nEl tocadiscos para DJ profesionales totalmente manual AT-LP140XP cuenta con un motor de gran de accionamiento directo y un plato antiresonancia, amortiguado y de aluminio fundido para garantizar una rotación en el eje estable a 33-1/3, 45 o 78 rpm. ",
          "precio": "699900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T02:13:07.119Z",
          "updatedAt": "2023-11-14T02:13:19.521Z",
          "publishedAt": "2023-11-14T02:13:19.173Z",
          "portada": {
            "data": {
              "id": 8,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699927940/06c2ca_ff07cf7eed6e4692b7134ca774e85d3a_mv2_7ce04a16e8.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 6,
              "attributes": {
                "nombre": "Tocadiscos"
              }
            }
          },
          "marca": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Audio-Technica"
              }
            }
          }
        }
      },
      {
        "id": 12,
        "attributes": {
          "nombre": "Guitarra Electroacústica Fender FA-235E CONCERT sunburst",
          "descripcion": "Visualmente impresionante con una espectacular tapa de arce flameado, la FA-235E ofrece el legendario sonido Fender con un precio amigable con su presupuesto. La construcción laminada de calidad con una moderna pala Fender 3+3 y puente vikingo crean un instrumento de gran sonido que es fácil de tocar. La moderna electrónica Fishman le permite llevar su sonido al escenario con facilidad. Los guitarristas principiantes y en desarrollo apreciarán el mástil de caoba que le da a la guitarra un tono alegre mientras se complementa con la tapa de arce flameado.",
          "precio": "429900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T04:29:14.558Z",
          "updatedAt": "2023-11-14T04:30:24.852Z",
          "publishedAt": "2023-11-14T04:29:34.312Z",
          "portada": {
            "data": {
              "id": 14,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699936207/06c2ca_b659a6b567524cb8a242230876804017_mv2_6082e52901.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 8,
              "attributes": {
                "nombre": "Guitarra Electroacústica "
              }
            }
          },
          "marca": {
            "data": {
              "id": 3,
              "attributes": {
                "nombre": "Fender"
              }
            }
          }
        }
      },
      {
        "id": 11,
        "attributes": {
          "nombre": "Guitarra Eléctrica Ibanez GRG140 WH",
          "descripcion": "La serie GIO está diseñada para músicos que quieren la calidad de Ibanez en una versión más asequible. Y esta vez Ibanez vuelve al ataque con la GRG140 que es la guitarra perfecta para principiantes que buscan un instrumento sólido y confiable.",
          "precio": "299900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T02:50:29.716Z",
          "updatedAt": "2023-11-14T02:51:12.999Z",
          "publishedAt": "2023-11-14T02:51:12.483Z",
          "portada": {
            "data": {
              "id": 12,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699930184/06c2ca_e6572c2cf04e4741920e2975405e7bf6_mv2_dba7d3f0b1.webp"
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
        "id": 10,
        "attributes": {
          "nombre": "Guitarra Eléctrica Ibanez GRG121DXL-WNF",
          "descripcion": "Gama GIO, GRG. Una guitarra eléctrica de 6 cuerdas para zurdos de la marca líder mundial de guitarras Ibanez/Ibanez reconocida calidad, jugabilidad y artesanía sea cual sea tu nivel o estilo de tocar la guitarra.",
          "precio": "269900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T02:38:34.298Z",
          "updatedAt": "2023-11-14T04:26:47.840Z",
          "publishedAt": "2023-11-14T04:26:47.493Z",
          "portada": {
            "data": {
              "id": 11,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699929643/06c2ca_37abdae674794b9fa1f5588828b44458_mv2_6714a053d9.webp"
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
        "id": 13,
        "attributes": {
          "nombre": "Guitarra Acústica Alhambra 1C",
          "descripcion": "Un instrumento de inicio en el estudio de la guitarra, con muy buenas prestaciones, perfecto acabado, hermosas maderas y peso ligero. Hecha a mano y con maderas seleccionadas,",
          "precio": "499900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T04:33:54.064Z",
          "updatedAt": "2023-11-14T04:34:48.826Z",
          "publishedAt": "2023-11-14T04:34:48.326Z",
          "portada": {
            "data": {
              "id": 15,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699936377/06c2ca_e2adbe768d2c48a3b8687c39f89e75f9_mv2_797a151b4b.webp"
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
        "id": 14,
        "attributes": {
          "nombre": "Guitarra Acústica Takamine GC1 natural",
          "descripcion": "La Takamine GC1 es una atractiva guitarra acústica clásica construida para ofrecer un hermoso sonido de cuerdas de nylon.\n\nUna excelente opción para cualquier músico que busque una guitarra clásica asequible que funcione muy por encima de su precio, la GC1 cuenta con una tapa de abeto selecta reforzada con aros y fondo de caoba para un sonido completo y equilibrado. El cómodo mástil de caoba y el diapasón de laurel proporcionan una gran sensación y facilidad de ejecución.",
          "precio": "289900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T04:38:13.166Z",
          "updatedAt": "2023-11-14T04:38:31.721Z",
          "publishedAt": "2023-11-14T04:38:31.372Z",
          "portada": {
            "data": {
              "id": 16,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699936643/06c2ca_366f5dbb0a3d49ac9c0a891c61b0c3b4_mv2_0ab885b949.webp"
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
              "id": 5,
              "attributes": {
                "nombre": "Takamine"
              }
            }
          }
        }
      },
      {
        "id": 15,
        "attributes": {
          "nombre": "Guitarra Acústica Washburn C6B negra",
          "descripcion": "La Classical Series de Washburn Guitars fue construida en la década de 1980. Inspiradas en los diseños de los maestros Luthieres más importantes, el enfoque de hoy de la Classical Series logra un equilibrio entre tono, valor y estabilidad.",
          "precio": "129900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T04:42:38.353Z",
          "updatedAt": "2023-11-14T04:42:50.412Z",
          "publishedAt": "2023-11-14T04:42:50.065Z",
          "portada": {
            "data": {
              "id": 17,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699936915/06c2ca_89510a5673954dd2810104ca5d32fc70_mv2_bf405633c7.webp"
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
              "id": 6,
              "attributes": {
                "nombre": "Washburn"
              }
            }
          }
        }
      },
      {
        "id": 16,
        "attributes": {
          "nombre": "Guitarra Eléctrica Ibanez RG320 EXZ",
          "descripcion": "La Ibanez RG es una guitarra clásica moderna, con su estética nítida y elegante que llama la atención de los hard rockers y metaleros desde finales de los 80. La RG320EXZ-BKF es una versión asequible de esta fórmula icónica de alto rendimiento, pero mantiene intactas muchas características distintivas.\n\nLas especificaciones clave incluyen un mástil Wizard III súper rápido, potentes cápsulas de la serie Quantum, trastes jumbo, un trémolo de bloqueo Edge-Zero II y hardware completamente negro para una estética oscura y sigilosa.",
          "precio": "719900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-14T04:48:10.516Z",
          "updatedAt": "2023-11-14T04:48:22.612Z",
          "publishedAt": "2023-11-14T04:48:22.264Z",
          "portada": {
            "data": {
              "id": 18,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1699937276/06c2ca_c2319b78ec30456b879cca0db84751b0_mv2_ee3bc100b2.webp"
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
        "id": 25,
        "attributes": {
          "nombre": "Parche hidráulico EVANS 13” para tom color azul",
          "descripcion": "Pensando en aquellos que quieren pocos armónicos y necesitan un parche resistente y fácil de afinar, Evans fabrica su serie Hydraulic. Estos parches llevan en el mercado décadas y tienen muchísimos seguidores.",
          "precio": "24000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T03:25:28.022Z",
          "updatedAt": "2023-11-16T03:25:41.939Z",
          "publishedAt": "2023-11-16T03:25:41.585Z",
          "portada": {
            "data": {
              "id": 27,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700105096/06c2ca_19c018dabe6e4550afe49de076a5af11_mv2_e7043d1b33.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Parches"
              }
            }
          },
          "marca": {
            "data": {
              "id": 12,
              "attributes": {
                "nombre": "Evans"
              }
            }
          }
        }
      },
      {
        "id": 17,
        "attributes": {
          "nombre": "Parche hidráulico EVANS 13” para tom color rojo",
          "descripcion": "Los parches Hydraulic de Evans fueron muy populares en la década de los 70 y ampliamente utilizado en el Rock.. Estos parches tienen una capa interior de aceite que les da una durabilidad extrema, reduce el sustain e incrementan el ataque del parche sin afectar al tacto con las baquetas. Además son muy fáciles de afinar.",
          "precio": "24000",
          "stock": 15,
          "es_despachable": false,
          "createdAt": "2023-11-15T22:29:23.502Z",
          "updatedAt": "2023-11-15T22:33:13.646Z",
          "publishedAt": "2023-11-15T22:33:13.457Z",
          "portada": {
            "data": {
              "id": 19,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700098377/Parche_Hidraulico_EVANS_fcdb7fb4ff.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Parches"
              }
            }
          },
          "marca": {
            "data": {
              "id": 12,
              "attributes": {
                "nombre": "Evans"
              }
            }
          }
        }
      },
      {
        "id": 18,
        "attributes": {
          "nombre": "Tocadiscos audio-technica ATLP60X",
          "descripcion": "Tanto si acaba de llegar al mundo del vinilo, está redescubriendo una colección de discos olvidada durante años o simplemente desea incorporar un tocadiscos para completar su sistema, el tocadiscos de transmisión por correa totalmente automático AT-LP60X es una opción excelente. Asequible y fácil de utilizar, el tocadiscos reproduce discos tanto de 33-1/3 como de 45 rpm y, gracias a su preamplificador fonográfico conmutable incorporado, puede conectarse directamente a su equipo estéreo doméstico, altavoces con alimentación, computadora y otros componentes, tengan o no una entrada fonográfica (phono) dedicada.",
          "precio": "199900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T02:39:57.035Z",
          "updatedAt": "2023-11-16T02:40:12.930Z",
          "publishedAt": "2023-11-16T02:40:12.577Z",
          "portada": {
            "data": {
              "id": 20,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700102324/06c2ca_651e15b1df4346aaa66c9505c9d447fd_mv2_86dbcfe3d0.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 6,
              "attributes": {
                "nombre": "Tocadiscos"
              }
            }
          },
          "marca": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Audio-Technica"
              }
            }
          }
        }
      },
      {
        "id": 19,
        "attributes": {
          "nombre": "Tocadiscos Audio-Technica AT-LP5X",
          "descripcion": "Tocadiscos con tracción directa completamente manual.",
          "precio": "499000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T02:44:32.797Z",
          "updatedAt": "2023-11-16T02:44:45.933Z",
          "publishedAt": "2023-11-16T02:44:45.577Z",
          "portada": {
            "data": {
              "id": 21,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700102580/06c2ca_ee9ae70abb7742b18ac498952681b4c7_mv2_a649c089d4.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 6,
              "attributes": {
                "nombre": "Tocadiscos"
              }
            }
          },
          "marca": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Audio-Technica"
              }
            }
          }
        }
      },
      {
        "id": 20,
        "attributes": {
          "nombre": "Tocadiscos Audio-Technica AT-LP120XBT-USB",
          "descripcion": "Este giradiscos totalmente manual se basa en el modelo AT-LP120XUSB, pero añade la comodidad de la conectividad inalámbrica Bluetooth® a las salidas analógicas y USB existentes.",
          "precio": "489900",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T02:47:39.542Z",
          "updatedAt": "2023-11-16T02:47:54.740Z",
          "publishedAt": "2023-11-16T02:47:54.389Z",
          "portada": {
            "data": {
              "id": 22,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700102823/06c2ca_1a7e221aeb7342af95f864d815ccce20_mv2_fe5424a0ce.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 6,
              "attributes": {
                "nombre": "Tocadiscos"
              }
            }
          },
          "marca": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Audio-Technica"
              }
            }
          }
        }
      },
      {
        "id": 21,
        "attributes": {
          "nombre": "Tocadiscos Audio-Technica AT-LP1240-USBXP",
          "descripcion": "Fabricado para ofrecer una reproducción de música excepcional, incluso en las condiciones de uso profesional más exigentes, el modelo AT-LP1240-USBXP utiliza un potente motor de accionamiento directo, trifásico para un inicio rápido y de 16 polos para ofrecer una estabilidad de la velocidad a toda prueba, así como un uso fácil del scratching, cambios de dirección y un funcionamiento silencioso a 33-1/3, 45 o 78 rpm.",
          "precio": "619000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T02:50:31.669Z",
          "updatedAt": "2023-11-16T02:50:45.766Z",
          "publishedAt": "2023-11-16T02:50:45.407Z",
          "portada": {
            "data": {
              "id": 23,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700103016/06c2ca_e7951592b0d048bc802391985b8c0e72_mv2_6dc2a5576f.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 6,
              "attributes": {
                "nombre": "Tocadiscos"
              }
            }
          },
          "marca": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Audio-Technica"
              }
            }
          }
        }
      },
      {
        "id": 22,
        "attributes": {
          "nombre": "PARAMORE - This is Why",
          "descripcion": "sexto álbum de estudio de la banda estadounidense Paramore, que se lanzó el 10 de febrero de 2023 a través de Atlantic Records. Es el primer álbum de la banda en casi seis años, después de After Laughter (2017), así como su primer álbum que presenta la misma formación que su predecesor. El sencillo principal del álbum, \"This Is Why\", se lanzó junto con el anuncio del álbum el 28 de septiembre de 2022.   ",
          "precio": "46000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T02:53:39.275Z",
          "updatedAt": "2023-11-16T02:57:31.062Z",
          "publishedAt": "2023-11-16T02:57:30.709Z",
          "portada": {
            "data": {
              "id": 24,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700103332/06c2ca_79d96566695b4f0f861e95d5709e38a1_mv2_8f121e31ee.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 10,
              "attributes": {
                "nombre": "Rock"
              }
            }
          },
          "marca": {
            "data": null
          }
        }
      },
      {
        "id": 24,
        "attributes": {
          "nombre": "Parche Poroso EVANS G2 13'' B13G2",
          "descripcion": "Los parches Evans G2 Coated tienen dos capas de 7 mm y nos ofrece la misma respuesta que el G1 pero con un sonido más profundo. Tiene un ataque poderoso y consistente.",
          "precio": "21000",
          "stock": 0,
          "es_despachable": false,
          "createdAt": "2023-11-16T03:11:27.457Z",
          "updatedAt": "2023-11-16T03:11:55.449Z",
          "publishedAt": "2023-11-16T03:11:55.085Z",
          "portada": {
            "data": {
              "id": 26,
              "attributes": {
                "url": "https://res.cloudinary.com/dotkvwxcc/image/upload/v1700104256/06c2ca_075ae667660b4a23955de4943a92e51c_mv2_9a5c9581e5.webp"
              }
            }
          },
          "subcategoria": {
            "data": {
              "id": 9,
              "attributes": {
                "nombre": "Parches"
              }
            }
          },
          "marca": {
            "data": {
              "id": 12,
              "attributes": {
                "nombre": "Evans"
              }
            }
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