import { Route } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './components/usuario-detail/usuario-detail.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailComponent } from './components/curso-detail/curso-detail.component';

export const routes: Route[] = [
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/:id', component: UsuarioDetailComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: 'cursos/:id', component: CursoDetailComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' }
];
