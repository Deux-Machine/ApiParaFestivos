import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { FormsModule } from '@angular/forms';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    NgxDatatableModule,
    FormsModule
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  public festivos: Festivo[] = [];
  public year: number = new Date().getFullYear();
  columnas = [
    { prop: "nombre", name: "Festivo" },
    { prop: "fecha", name: "Fecha" }
  ];

  constructor(private servicio: FestivoService
  ) { }

  public listar() {
    this.servicio.listar(this.year).subscribe({
      next: respuesta => {
        if (respuesta) {
          this.festivos = respuesta;
        }
      },
      error: error => {
        window.alert(error.message);
      }
    }
    );
  }

}
