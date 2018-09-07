import { NgModule } from '@angular/core';

import { Modulo1RoutingModule } from './modulo1-routing.module';
import { Componente1Component } from './componente1/componente1.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  imports: [
    CompartidoModule,
    Modulo1RoutingModule
  ],
  declarations: [Componente1Component]
})
export class Modulo1Module { }
