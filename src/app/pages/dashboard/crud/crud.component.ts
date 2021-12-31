import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private _router:Router) { }

  ngOnInit(): void {
    this.formAdd = this._formBuilder.group({
      id: ['',Validators.required],
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      estado: ['',Validators.required],
      tipo: ['',Validators.required],
      sexo: ['',Validators.required],
      especie: ['',Validators.required]

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


}
