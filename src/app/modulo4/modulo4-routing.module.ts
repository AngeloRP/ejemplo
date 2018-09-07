import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente4Component } from './componente4/componente4.component';

const routes: Routes = [
  {
  path:'',
  component: Componente4Component
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo4RoutingModule { }
