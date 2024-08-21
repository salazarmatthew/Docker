// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './usuarios/listar/listar.component';
import { CrearUsuarioComponent } from './usuarios/crear/crear.component';
import { EditarUsuarioComponent } from './usuarios/editar/editar.component';
import { ListarCursosComponent } from './cursos/listar/listar.component';
import { CrearCursoComponent } from './cursos/crear/crear.component';
import { EditarCursoComponent } from './cursos/editar/editar.component';

export const routes: Routes = [
  { path: 'usuarios/listar', component: ListarUsuariosComponent },
  { path: 'usuarios/crear', component: CrearUsuarioComponent },
  { path: 'usuarios/editar/:id', component: EditarUsuarioComponent },
  { path: 'cursos/listar', component: ListarCursosComponent },
  { path: 'cursos/crear', component: CrearCursoComponent },
  { path: 'cursos/editar/:id', component: EditarCursoComponent },
];
