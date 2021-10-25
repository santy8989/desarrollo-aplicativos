import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Usuarios: Usuario[];
  isLoad:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.isLoad=false
    this.authService.getUsers().subscribe(response => {
     console.log(response)
     this.isLoad=true
     this.Usuarios=response
    }, error => {
      console.error("tuve un Error" + error)

    })
  }
  editUser(admin:boolean,id:string){
    this.authService.editUser(admin,id).subscribe(response => {
      console.log(response)
     this.getUsers()
     }, error => {
       console.error("tuve un Error" + error)
 
     })

  }

}
