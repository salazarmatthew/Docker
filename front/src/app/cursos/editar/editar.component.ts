import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarCursoComponent implements OnInit {
  curso: Curso = { id:0,nombre: '' ,cursoUsuarios: []};
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cursosService.detalle(this.id).subscribe(data => {
      this.curso = data;
    });
  }

  editarCurso(): void {
    this.cursosService.editar(this.id, this.curso).subscribe(() => {
      this.router.navigate(['/cursos']);
    });
  }
}
