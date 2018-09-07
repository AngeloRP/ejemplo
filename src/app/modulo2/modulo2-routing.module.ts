import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente2Component } from './componente2/componente2.component';

const routes: Routes = [
  {
    path:'',
    component: Componente2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }
