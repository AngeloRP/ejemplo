import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  login: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.login = this._formBuilder.group({
      'codigoCine': ['', Validators.required],
      'contrasena': ['', Validators.required]
    });
  }

  ingresar() {
    console.log('Campos:' + JSON.stringify(this.login));
  }

  codigoCineValido():boolean {
      return this.login.get('codigoCine').valid;
  }

  codigoCineDirty():boolean {
    return this.login.get('codigoCine').dirty;
  }

  contrasenaValida(): boolean {
    return this.login.get('contrasena').valid;
  }

  getErrorMessage():string {
    return 'Este campo es requerido';
  }


}
