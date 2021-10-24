import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/auth/interfaces/Usuario';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isAdmin:boolean=false;
  isUser:boolean=false;
  constructor( private router: Router) { }

  ngOnInit(): void {
    let usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
    if (usuario) {
      this.isUser=true
      if(usuario.admin){
        this.isAdmin=true;
      }
    }else{
      this.isAdmin=false;
      this.isUser=false
    }
  }
  public onToggleSidenav = () => { 
  }
  logout() {
    localStorage.removeItem("usuario");
    this.router.navigate(["/auth/login"])
  }

}
