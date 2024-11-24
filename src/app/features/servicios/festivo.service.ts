import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../core/entidades/festivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}festivos/`;
  }

  private obtenerHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    });
  }

  public listar(año: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listar/${año}`, { headers: this.obtenerHeaders() });
  }

  public validar(fecha: Date): Observable<string> {
    return this.http.get<string>(`${this.url}verificar/${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()}`,
      { headers: this.obtenerHeaders(), responseType: 'text' as 'json' });
  }

}
