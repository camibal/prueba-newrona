import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animales } from '../models/tipos';
import { Carros } from '../models/tipos';
import { Personas } from '../models/tipos';
import { Ciudades } from '../models/tipos';
import { Deportes } from '../models/tipos';
import { Religiones } from '../models/tipos';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private animales: Animales[] = [
    {
      id: 1,
      img: 'https://static.nationalgeographic.es/files/styles/image_3200/public/2226.600x450.jpg?w=1900&h=1425',
      nombre: 'Águila',
      tipo: 'carnívoro',
    },
    {
      id: 2,
      img: 'https://www.horse1.es/images/Caballo-en-forma.jpg',
      nombre: 'Caballo',
      tipo: 'herbívoro',
    },
    {
      id: 3,
      img: 'https://static.wikia.nocookie.net/reinoanimalia/images/3/35/Avestruz_2.png/revision/latest/top-crop/width/360/height/450?cb=20150715062953&path-prefix=es',
      nombre: 'Avestruz',
      tipo: 'omnívoro',
    },
    // {
    //   id: 4,
    //   nombre: 'Coyote',
    //   tipo: 'carnívoro',
    // },
    // {
    //   id: 5,
    //   nombre: 'Oveja',
    //   tipo: 'herbívoro',
    // }
  ];
  private carros: Carros[] = [
    {
      id: 1,
      img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg',
      marca: 'Honda Civic 2021',
      descripcion: 'El Honda Civic es un vehículo compacto, del segmento C, fabricado por Honda desde 1972 y se trata del modelo más importante de Honda en Europa. Actualmente se comercializa la séptima generación, a través del rediseño de mitad de vida presentado en 2019, que mejora su diseño interior y añade importantes sistemas tecnológicos y de conectividad. No hace falta decir que el emblema Honda Civic es, con diferencia, el más importante de Honda en Europa. Hablamos de un producto con más de 40 años de historia y una gran tradición en España y en Europa. El Civic es para su producto más icónico y representativo, más allá de la moda SUV.',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujhfzHhJyS4kdEbyJSVxNFkzgSu_eJnSd_Q&usqp=CAU',
      marca: 'Ferrari F430',
      descripcion: 'El Ferrari F430 es un automóvil deportivo de dos puertas biplaza producido por el fabricante italiano Ferrari desde 2004 hasta 2009.4​5​6​ El F430 es una versión mejorada del Ferrari 360 Modena, al cual sustituye. Tiene motor central-trasero montado longitudinalmente y tracción trasera; se vendía con carrocerías coupé y descapotable ("F430 Spider"), presentados en 2004 y 2006 respectivamente.',
    },
    {
      id: 3,
      img: 'https://i.blogs.es/70e92b/lamborghini-murcielago-lp640-4-roadster-manual--11-/1366_2000.jpg',
      marca: 'Lamborghini Murciélago',
      descripcion: 'El Lamborghini Murciélago es un automóvil superdeportivo diseñado y producido por el fabricante italiano Lamborghini en su fábrica de Sant Agata Bolognese con motor central-trasero montado longitudinalmente de tracción integral. Es un dos plazas disponible con carrocerías coupé o Roadster de dos puertas de tijera, también conocidas como "Lamborghini Style Doors" o puertas estilo Lamborghini.',
    },
    // {
    //   id: 4,
    //   marca: 'Coupé',
    //   descripcion: 'El coche coupé es un modelo con carrocería cerrada de dos puertas acristaladas y dos (o más) plazas que resulta de “cortar” un sedán. En los orígenes encontrábamos un tipo de carruaje en que el cochero iba sentado delante, a la intemperie, mientras que los pasajeros lo hacían en el interior de una carlinga, a la que accedían por dos puertas. Y esta es la clave del coupé: el número de puertas, siempre 2.',
    // },
    // {
    //   id: 5,
    //   marca: 'Lamborghini Veneno',
    //   descripcion: 'El Lamborghini Veneno Roadster lleva la eficiencia aerodinámica de un prototipo de carreras a las carreteras de todos los días. Este superdeportivo se caracteriza por una aerodinámica óptima, para garantizar la estabilidad en las curvas rápidas y un comportamiento similar al de un prototipo de carreras. Todo esto en un coche diseñado para la carretera. El coche ideal para los amantes de la conducción deportiva.',
    // }
  ];
  private personas: Personas[] = [
    {
      id: 1,
      img: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg',
      nombre: 'Pablo Muñoz',
      pais: 'Colombia',
      profesion: 'Desarrollador web'
    },
    {
      id: 2,
      img: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/419665d2-74b7-49d4-b3c8-3aea253f966f.jpg',
      nombre: 'Juan Perez',
      pais: 'Ecuador',
      profesion: 'Ingeniero industrial'
    },
    {
      id: 3,
      img: 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/ace72541-87aa-4391-8ded-e24d9f8a5977.jpg',
      nombre: 'Carlos Garcia',
      pais: 'Colombia',
      profesion: 'Comunicador social'
    },
    // {
    //   id: 4,
    //   nombre: 'Malon Gutierres',
    //   pais: 'Venzuela',
    //   profesion: 'Sociologo'
    // },
    // {
    //   id: 5,
    //   nombre: 'Amalia Sierra',
    //   pais: 'Colombia',
    //   profesion: 'Diseñador gráfico'
    // }
  ];
  private ciudades: Ciudades[] = [
    {
      id: 1,
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Bogot%C3%A1Skyline.jpg',
      nombre: 'Bogotá',
      pais: 'Colombia',
      continente: 'America',
    },
    {
      id: 2,
      img: 'data:image/jpeg;base64,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',
      nombre: 'Paris',
      pais: 'Francia',
      continente: 'Europa',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXDni3hEwuVPcRH2FBHDfdv0CUWcPqns5Ig&usqp=CAU',
      nombre: 'Barcelona',
      pais: 'España',
      continente: 'Europa',
    },
    // {
    //   id: 4,
    //   nombre: 'Moscú',
    //   pais: 'Rusia',
    //   continente: 'Europa',
    // },
    // {
    //   id: 5,
    //   nombre: 'Los Ángeles',
    //   pais: 'Estados Unidos',
    //   continente: 'America',
    // }
  ];
  private deportes: Deportes[] = [
    {
      id: 1,
      img: 'https://checkyeti.imgix.net/images/optimized/photo-3201.jpg',
      nombre: 'Downhill Bike',
      tipo: 'Deporte de montaña',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLo7RETCDLk2uec9sNBwU3PqeotOSa19U62A&usqp=CAU',
      nombre: 'Futbol',
      tipo: 'Deporte en equipo',
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mLe0nzFsyZR03INdxMiKY-GdvnkOESHezQ&usqp=CAU',
      nombre: 'Ajedrez',
      tipo: 'Deporte mental',
    },
    // {
    //   id: 4,
    //   nombre: 'Ski',
    //   tipo: 'Deporte sobre nieve',
    // },
    // {
    //   id: 5,
    //   nombre: 'Ajedrez',
    //   tipo: 'Deporte mental',
    // }
  ];
  private religiones: Religiones[] = [
    {
      id: 1,
      img: 'https://s1.significados.com/foto/historia-do-cristianismo_bg.jpg',
      nombre: 'Cristianismo',
      descripcion: 'Con un 33.06% de los fieles del mundo, es la religión mayoritaria actualmente, agrupando sus distintas sectas como el catolicismo, el protestantismo y las iglesias evangélicas.',
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7GlmCgxzQicseRZFNdezz5rFWPKFZCQRUg&usqp=CAU',
      nombre: 'Islam',
      descripcion: 'La religión hermana del cristianismo, de origen asiático, posee el 20,28% de los fieles mundiales en sus diversas expresiones, más o menos ortodoxas. Se ha hecho tristemente célebre a principios del siglo XXI por las facciones radicales islámicas como el Estado Islámico.',
    },
    {
      id: 3,
      img: 'https://concepto.de/wp-content/uploads/2020/02/hinduismo-brahma-e1582824790828.jpg',
      nombre: 'Hinduismo',
      descripcion: 'Con un 13,33% de los fieles, la religión hindi sobrevive a pesar de las condiciones de colonialismo económico y cultural sufridas por su cuna, la nación de la India, durante el siglo XIX y parte del XX.',
    },
    // {
    //   id: 4,
    //   nombre: 'Religión China',
    //   descripcion: 'La religión tradicional china es la que más seguidores posee (6,27% del mundo) en su territorio, a pesar de ser una religión mixta cuyas prácticas no siempre son uniformes, y presentan un alto grado de sincretismo. Fuente: https://concepto.de/religion-3/#ixzz6mwAvtRVO',
    // },
    // {
    //   id: 5,
    //   nombre: 'Budismo',
    //   descripcion: 'Con un 5,87% de los fieles totales, el budismo es la quinta religión mayoritaria del mundo.',
    // }
  ];

  constructor(private httpClient: HttpClient) { }

  getAnimales() {
    return this.animales;
  }
  getCarros() {
    return this.carros;
  }
  getPersonas() {
    return this.personas;
  }
  getCiudades() {
    return this.ciudades;
  }
  getDeportes() {
    return this.deportes;
  }
  getReligiones() {
    return this.religiones;
  }
}
