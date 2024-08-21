// src/app/services/usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8001/usuarios';

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/verUsuarios`);
  }

  detalle(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/buscar/${id}`);
  }

  crear(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/agregar`, usuario);
  }

  editar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/editar/${id}`, usuario);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
  
  inscribir(usuarioId: number, cursoId: number): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/inscribir/${usuarioId}/${cursoId}`, {});
  }

  desinscribir(usuarioId: number, cursoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/desinscribir/${usuarioId}/${cursoId}`);
  }
}
