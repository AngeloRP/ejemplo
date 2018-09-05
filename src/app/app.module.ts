import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteEjemploComponent } from './componente-ejemplo/componente-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEjemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
