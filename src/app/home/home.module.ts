import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { CarrouselComponent } from './carrousel/carrousel.component';


@NgModule({
  declarations: [HomeComponent, BibliotecaComponent, UsersComponent, FizzBuzzComponent, CarrouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
