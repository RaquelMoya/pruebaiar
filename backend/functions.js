//funcion para leer datos de json
const datos = {
    "datos": {
        "Usuarios" : [
            {
                "id" : 1,
                "nombre" : "Raquel",
                "apellido" : "Moya",
                "edad" : 32,
                "email" : "rakelms90@gmail.com",
                "visualizaciones" : {
                    "enero": {
                        "id": 1,
                        "nombre": "Juego de Tronos",
                        "temporada": 1,
                        "episodio": 1,
                        "fecha": "20/01/2020"
                    },
                    "febrero": {
                        "id": 2,
                        "nombre": "Breaking Bad",
                        "temporada": 1,
                        "episodio": 1,
                        "fecha": "20/02/2021"
                    }
                }
            },
            {
                "id" : 2,
                "nombre" : "Raul",
                "apellido" : "Perez",
                "edad" : 25,
                "email" : "raul@gmail.com",
                "visualizaciones" : {
                    "enero": {
                        "id": 1,
                        "nombre": "Juego de Tronos",
                        "temporada": 1,
                        "episodio": 1,
                        "fecha": "20/01/2020"
                    }
                }
            },
            {
                "id" : 3,
                "nombre" : "Javier",
                "apellido" : "Navarro",
                "edad" : 28,
                "email" : "javier@gmail.com",
                "visualizaciones" : {
                    "febrero": {
                        "id": 1,
                        "nombre": "Breaking Bad",
                        "temporada": 1,
                        "episodio": 1,
                        "fecha": "20/02/2022"
                    }
                }
            }
        ],
        "Series": [
            {
                "id" : 1,
                "nombre" : "Juego de Tronos",
                "temporadas" : 8,
                "Episodios" : {
                    "1": "20/01/2020",
                    "2": "21/02/2020",
                    "3": "22/03/2020",
                    "4": "23/04/2020",
                    "5": "24/05/2020"
                },
                "Genero" : "Fantasia",
                "Director": {
                    "id": 3,
                    "nombre": "Martin",
                    "apellido": "Scorsese"
                },
                "Actores" : {
                    "1": "Peter Dinklage",
                    "2": "Lena Headey",
                    "3": "Emilia Clarke",
                    "4": "Kit Harington",
                    "5": "Sophie Turner"
                }
            },
            {
                "id" : 2,
                "nombre" : "Breaking Bad",
                "temporadas" : 5,
                "Episodios" : {
                    "1": "20/01/2021",
                    "2": "21/02/2021",
                    "3": "22/03/2021",
                    "4": "23/04/2021",
                    "5": "24/05/2021"
                },
                "Genero" : "Drama",
                "Director": {
                    "id": 2,
                    "nombre": "Quentin",
                    "apellido": "Tarantino"
                },
                "Actores" : {
                    "1": "Bryan Cranston",
                    "2": "Aaron Paul",
                    "3": "Anna Gunn",
                    "4": "Dean Norris",
                    "5": "Betsy Brandt"
                }
            },
            {
                "id" : 3,
                "nombre" : "The Walking Dead",
                "temporadas" : 9,
                "Episodios" : {
                    "1": "20/01/2022",
                    "2": "21/02/2022",
                    "3": "22/03/2022",
                    "4": "23/04/2022",
                    "5": "24/05/2022"
                },
                "Genero" : "Terror",
                "Director": {
                    "id": 1,
                    "nombre": "Steven",
                    "apellido": "Spielberg"
                },
                "Actores" : {
                    "1": "Andrew Lincoln",
                    "2": "Norman Reedus",
                    "3": "Steven Yeun",
                    "4": "Lauren Cohan",
                    "5": "Chandler Riggs"
                }
            }
        ]
    }
}

// Mostrar la información detallada de una serie en concreto

//funcion para mostrar la informacion de una serie
function mostrarSerie(nombre){
    let serie = datos.datos.Series.find(serie => serie.nombre == nombre);
    console.log(serie);
}

//funcion para mostrar visualizaciones de un usuario determinado, dado un mes de un año en concreto

function mostrarVisualizacion(mes, nombre){
    let usuario = datos.datos.Usuarios.find(usuario => usuario.nombre == nombre);
    let visualizacion = usuario.visualizaciones[mes];
    console.log(visualizacion);
}

//calendario de emisiones de episodios de las series

function calendario(){
    let series = datos.datos.Series;
    let calendario = [];
    for(let serie of series){
        let episodios = serie.Episodios;
        for(let episodio in episodios){
            let fecha = episodios[episodio];
            let serieCalendario = {
                "nombre": serie.nombre,
                "episodio": episodio,
                "fecha": fecha
            }
            calendario.push(serieCalendario);
        }
    }
    console.log(calendario);
}