import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/app/auth/interfaces/Usuario';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isAdmin:boolean=false;
  constructor() { }

  ngOnInit(): void {
    let usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
    if (usuario) {
      if(usuario.admin){
        this.isAdmin=true;
      }
    }else{
      this.isAdmin=false;
    }
  }
  public onToggleSidenav = () => { 
  }

}
