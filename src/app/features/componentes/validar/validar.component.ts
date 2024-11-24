import { Component } from '@angular/core';
import { FestivoService } from '../../servicios/festivo.service';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './validar.component.html',
  styleUrl: './validar.component.css'
})
export class ValidarComponent {

  public fecha: Date = new Date();


  constructor(private servicio: FestivoService) { }

  public validar() {
    this.servicio.validar(this.fecha).subscribe({
      next: respuesta => {
        if (respuesta) {
          window.alert(respuesta);
        }
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

}
