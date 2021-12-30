import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  result:any = []

  constructor(private _peticion:PeticionesService) { }

  ngOnInit(): void {
    this.getPersonajes()
  }

  getPersonajes(){
    this._peticion.getPersonajes().subscribe({
      next: data =>
      {
        console.log(data.results)
      }
    })
  }

}
