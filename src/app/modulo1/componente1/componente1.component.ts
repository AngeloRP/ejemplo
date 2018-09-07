import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
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
