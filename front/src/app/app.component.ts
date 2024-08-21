import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrearUsuarioModule } from './usuarios/crear/crear.module';
import { EditarUsuarioModule } from './usuarios/editar/editar.module';
import { ListarUsuarioModule } from './usuarios/listar/listar.module';
import { NavbarModule } from "./navbar/navbar.module";
import { CrearCursoModule } from './cursos/crear/crear.module';
import { EditarCursoModule } from './cursos/editar/editar.module';
import { ListarCursosModule } from './cursos/listar/listar.module';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, // Asegúrate de incluir RouterModule aquí
    CrearUsuarioModule, 
    EditarUsuarioModule, 
    NavbarModule, 
    CrearCursoModule, 
    EditarCursoModule, 
    ListarUsuarioModule, 
    ListarCursosModule,
    CrearUsuarioModule,
    MessagesModule,
    MessageModule
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  redirectToUsuarios() {
    this.router.navigate(['/usuarios/listar']);
  }

  redirectToCursos() {
    this.router.navigate(['/cursos/listar']);
  }
}
