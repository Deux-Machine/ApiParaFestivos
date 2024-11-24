import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../core/entidades/usuario';
import { Observable } from 'rxjs';
import { Login } from '../../core/DTOs/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}usuarios/`;
  }

  public login(usuario: Usuario): Observable<Login> {
    return this.http.get<Login>(`${this.url}login/${usuario.usuario}/${usuario.clave}`);
  }

}
