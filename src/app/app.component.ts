import { Component, OnInit } from '@angular/core';
import { Animales } from './models/tipos';
import { BibliotecaService } from './services/biblioteca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba-newrona';
  animales: any;
  carros: any;
  personas: any;
  ciudades: any;
  deportes: any;
  religiones: any;
  filtro: any = 'todo';
  formBiblioteca: any = { filtroBiblioteca: '' };

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit() {
    this.animales = this.getAnimales();
    this.carros = this.getCarros();
    this.personas = this.getPersonas();
    this.ciudades = this.getCiudades();
    this.deportes = this.getDeportes();
    this.religiones = this.getReligiones();
  }

  getAnimales(): Animales[] {
    return this.bibliotecaService.getAnimales();
  }

  getCarros() {
    return this.bibliotecaService.getCarros();
  }

  getPersonas() {
    return this.bibliotecaService.getPersonas();
  }

  getCiudades() {
    return this.bibliotecaService.getCiudades();
  }

  getDeportes() {
    return this.bibliotecaService.getDeportes();
  }

  getReligiones() {
    return this.bibliotecaService.getReligiones();
  }

}
