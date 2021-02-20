export interface Animales {
    id: number,
    img: string,
    nombre: string,
    tipo: string,

}
export interface Carros {
    id: number,
    img: string,
    marca: string,
    descripcion: string,
}
export interface Personas {
    id: number,
    img: string,
    nombre: string,
    pais: string,
    profesion: string
}
export interface Ciudades {
    id: number,
    img: string,
    nombre: string,
    pais: string,
    continente: string,
}
export interface Deportes {
    id: number,
    img: string,
    nombre: string,
    tipo: string,
}
export interface Religiones {
    id: number,
    img: string,
    nombre: string,
    descripcion: string,
}

export interface User {
    nombre: string,
    apellido: string,
    ocupacion: string,
    cedula: number,
    terminos: boolean,
    subscripcion: boolean
}
