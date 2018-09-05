import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-ejemplo',
  templateUrl: './componente-ejemplo.component.html',
  styleUrls: ['./componente-ejemplo.component.css']
})
export class ComponenteEjemploComponent implements OnInit {
  titulo = 'PRUEBA';
  constructor() { }

  ngOnInit() {
  }

}
