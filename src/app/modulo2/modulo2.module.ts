import { NgModule } from '@angular/core';

import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Componente2Component } from './componente2/componente2.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  imports: [
    CompartidoModule,
    Modulo2RoutingModule
  ],
  declarations: [Componente2Component]
})
export class Modulo2Module { }
