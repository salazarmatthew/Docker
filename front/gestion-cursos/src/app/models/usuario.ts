// src/app/models/usuario.ts

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  tipo: string;
  cursoIds: number[];
}
