import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onSearch(valor:string){
    if (valor && valor.length > 3){
      this._router.navigate(['/dashboard'],{
        queryParams:{q:valor}
      })
    }
    
  }

}
