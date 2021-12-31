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
        }
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
        }
    ]
},
]
