// src/app/models/curso.ts
export interface Curso {
    id: number;
    nombre: string;
    cursoUsuarios: { id: number; usuarioId: number }[]; 
  }
  