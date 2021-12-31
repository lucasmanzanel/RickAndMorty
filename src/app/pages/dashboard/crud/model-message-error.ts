export interface IAtribute{
    formControlName:string;
    validators: IValidator[]
}

export interface IValidator{
    name: string;
    message:string
}

export const MODEL_ERROR_FORM: IAtribute[] = [
{
    formControlName:'id',
    validators:[
        {
            name:'required',
            message:'El ID es necesario'
        },
        {
            name:'pattern',
            message:'Solo se aceptan valores numericos'
        }
    ]
},
{
    formControlName: 'nombre',
    validators: [
        {
            name:'required',
            message:'El nombre es requerido'
        },
        {
            name: 'minlength',
            message:'El nombre requiere al menos 3 caracteres'
        },
        {
            name:'pattern',
            message:'No se aceptan numeros'
        }
    ]
},
{
    formControlName:'estado',
    validators:[
        {
            name:'required',
            message:'El estado es requerido'
        }

    ]
},{
    formControlName:'tipo',
    validators:[
        {
            name:'required',
            message:'El tipo es requerido'
        },
        {
            name:'pattern',
            message:'No se aceptan numeros'
        },
        {
            name: 'minlength',
            message:'El nombre requiere al menos 3 caracteres'
        },
    ]
},{
    formControlName:'sexo',
    validators:[
        {
            name:'required',
            message:'El campo es obligatorio'
        }
    ]
},{
    formControlName:'especie',
    validators:[
        {
            name:'required',
            message:'El campo especie es requerido'
        },
        {
            name:'pattern',
            message:'No se aceptan numeros'
        },
        {
            name: 'minlength',
            message:'El nombre requiere al menos 3 caracteres'
        },
    ]
},
]
