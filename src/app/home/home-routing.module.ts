import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FizzBuzzComponent } from './fizz-buzz/fizz-buzz.component';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: BibliotecaComponent },
      { path: 'users', component: UsersComponent },
      { path: 'fizzBuzz', component: FizzBuzzComponent },
      { path: 'carrousel', component: CarrouselComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
