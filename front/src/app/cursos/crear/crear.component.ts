import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/curso';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [MessageService]
})
export class CrearCursoComponent {
  curso: Curso = { id: 0, nombre: '', cursoUsuarios: [] };

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private messageService: MessageService
  ) { }

  crearCurso(): void {
    this.cursosService.crear(this.curso).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Curso creado exitosamente' });
        this.router.navigate(['/cursos']);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al crear el curso' });
      }
    );
  }
}
