import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAtribute, MODEL_ERROR_FORM } from './model-message-error';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  formAdd!:FormGroup

  constructor(private _formBuilder:FormBuilder,
    private _router:Router,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.formAdd = this._formBuilder.group({
      id: ['',[Validators.required,Validators.pattern(/^([0-9])*$/)]],
      nombre: ['',[Validators.required,Validators.minLength(3),Validators.pattern(/^([a-z])*$/)]],
      estado: ['',[Validators.required]],
      tipo: ['',[Validators.required,Validators.pattern(/^([a-z])*$/),Validators.minLength(3)]],
      sexo: ['',[Validators.required]],
      especie: ['',[Validators.required,Validators.pattern(/^([a-z])*$/),Validators.minLength(3)]]

    })
  }

  back(){
    this._router.navigate(['dashboard'])
  }

  getError(controlName:string):string{
    const control = this.formAdd?.get(controlName);
    if (control?.invalid){
      const atributeError = MODEL_ERROR_FORM
      .find(x => x.formControlName == controlName);
      const validator = atributeError?.validators
      .find((validator) => control.errors![validator.name])

      return validator!.message
    }
    return ''
  }

  enviar(){
    this._router.navigate(['dashboard'])
    this._snackBar.open('Personaje creado con exito','',{
      panelClass:['snackBarSuccess'],
      duration:3000
    })
  }

}
