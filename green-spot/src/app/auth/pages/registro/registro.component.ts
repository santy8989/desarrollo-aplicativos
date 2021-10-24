import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../../interfaces/Usuario';
import { AuthService } from '../../service/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public form: FormGroup;

  constructor(private authService:AuthService, private formBuilder: FormBuilder, private router: Router,private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      user: [
        null,
        [
          Validators.required
        ]
      ],
      password: [
        null,
        [
          Validators.required]
      ],
    })
  }

  ngOnInit(): void {
    
  }
  

  register() {
    this.authService.register(this.form).subscribe(response => {
      this._snackBar.open("Usuario Creado correctamente", "Cerrar",
    {
      duration: 3000,
    });
      this.router.navigate(['/auth']);
    }, error => {
      console.error("tuve un Error" + error)

    })
  }


}
