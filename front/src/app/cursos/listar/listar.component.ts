import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { UsuariosService } from '../../services/usuarios.service';
import { Curso } from '../../models/curso';
import { Usuario } from '../../models/usuario';
import { MessageService } from 'primeng/api'; // Importa MessageService

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [MessageService] // Agrega MessageService en providers
})
export class ListarCursosComponent implements OnInit {
  cursos: Curso[] = [];
  usuarios: Usuario[] = [];
  cursoSeleccionado: number | null = null;
  usuarioSeleccionado: Usuario | null = null;
  mostrarFormularioAsignacion = false;
  usuariosMap: Map<number, Usuario> = new Map();

  constructor(
    private cursosService: CursosService,
    private usuariosService: UsuariosService,
    private messageService: MessageService // Inyecta MessageService aquí
  ) { }

  ngOnInit(): void {
    this.cursosService.listar().subscribe(data => {
      this.cursos = data;
    });
    this.usuariosService.listar().subscribe(data => {
      this.usuarios = data;
      this.usuarios.forEach(usuario => this.usuariosMap.set(usuario.id, usuario));
    });
  }

  eliminarCurso(id: number): void {
    if (id !== undefined) {
      this.cursosService.eliminar(id).subscribe(() => {
        this.cursos = this.cursos.filter(curso => curso.id !== id);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Curso eliminado con éxito' }); // Usa MessageService aquí
      });
    }
  }

  asignarUsuario(): void {
    if (this.cursoSeleccionado !== null && this.usuarioSeleccionado !== null) {
      const usuario: Usuario = {
        id: this.usuarioSeleccionado.id,
        nombre: this.usuarioSeleccionado.nombre,
        email: this.usuarioSeleccionado.email,
        password: this.usuarioSeleccionado.password
      };

      console.log('Asignación:', usuario);

      this.cursosService.asignarUsuario(this.cursoSeleccionado, usuario).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario asignado con éxito' }); // Usa MessageService aquí
          this.ngOnInit(); // Recarga los datos
        },
        error: (err) => {
          console.error('Error al asignar usuario:', err);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al asignar usuario' }); // Usa MessageService aquí
        }
      });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Debe seleccionar un curso y un usuario' }); // Usa MessageService aquí
    }
  }

  getUsuarioNombre(usuarioId: number): string {
    const usuario = this.usuariosMap.get(usuarioId);
    return usuario ? usuario.nombre : 'Desconocido';
  }
}
