import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo4RoutingModule } from './modulo4-routing.module';
import { Componente4Component } from './componente4/componente4.component';

@NgModule({
  imports: [
    CommonModule,
    Modulo4RoutingModule
  ],
  declarations: [Componente4Component]
})
export class Modulo4Module { }
