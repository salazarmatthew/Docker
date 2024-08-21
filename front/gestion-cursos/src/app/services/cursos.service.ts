// src/app/services/curso.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8002/cursos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  detalle(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`);
  }

  crear(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, curso);
  }

  editar(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, curso);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  asignarUsuario(idCurso: number, usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/asignar-usuario/${idCurso}`, usuario);
  }

  crearYAsignarUsuario(idCurso: number, usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/crear-asignar-usuario/${idCurso}`, usuario);
  }

  quitarUsuario(idCurso: number, usuarioId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/quitar-usuario/${idCurso}/${usuarioId}`);
  }
}
