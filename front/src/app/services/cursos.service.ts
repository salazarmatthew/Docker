// src/app/services/cursos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { Usuario } from '../models/usuario';
import { Asignacion } from '../models/Asignacion';  // Asegúrate de importar el modelo de Asignacion

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private apiUrl = 'http://localhost:8002/cursos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/listar`);
  }

  detalle(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/detalle/${id}`);
  }

  crear(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/crearCurso`, curso);
  }

  editar(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/editarCurso/${id}`, curso);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminarCurso/${id}`);
  }

  asignarUsuario(idcurso: number, usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/asignar-usuario/${idcurso}`, usuario);
  }
}
