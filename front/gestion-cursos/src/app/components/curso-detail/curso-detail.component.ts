import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/cursos.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  curso: Curso = {
    id: 0,
    nombre: '',
    usuarioIds: []
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.obtenerCurso();
  }

  obtenerCurso(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cursoService.detalle(id).subscribe(curso => {
      this.curso = curso;
    });
  }

  guardar(): void {
    if (this.curso.id) {
      this.cursoService.editar(this.curso.id, this.curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    } else {
      this.cursoService.crear(this.curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/cursos']);
  }
  
}
