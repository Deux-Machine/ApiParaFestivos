import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { Router, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    RouterModule,
    NgFor,
    NgIf
  ],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {

  public opciones = [
    { titulo: 'Validar', url: 'validar' },
    { titulo: 'Listar', url: 'listar' },
  ];

  constructor(private dialog: MatDialog,
    private servicio: UsuarioService
  ) {
    sessionStorage.setItem("login", "N");
    sessionStorage.setItem("token", "");
  }

  public login() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      height: '300px',
      disableClose: true,
      data: {
        usuario: {
          usuario: "",
          clave: ""
        }
      }
    });

    dialogRef.afterClosed().subscribe({
      next: data => {
        if (data) {
          this.servicio.login(data.usuario).subscribe({
            next: respuesta => {
              if (respuesta) {
                sessionStorage.setItem("login", "S");
                sessionStorage.setItem("token", respuesta.token);
              }
            },
            error: error => {
              window.alert(error.message);
            }
          });
        }
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

}


