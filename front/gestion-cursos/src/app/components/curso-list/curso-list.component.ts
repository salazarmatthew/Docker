import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/cursos.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos(): void {
    this.cursoService.listar().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  eliminarCurso(id: number): void {
    this.cursoService.eliminar(id).subscribe(() => {
      this.listarCursos();
    });
  }
}
