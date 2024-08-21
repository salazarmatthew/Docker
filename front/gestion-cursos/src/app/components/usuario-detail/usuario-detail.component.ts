import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    password: '',
    tipo: '',
    cursoIds: []
  };

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.usuarioService.detalle(id).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  guardar(): void {
    if (this.usuario.id) {
      this.usuarioService.editar(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.crear(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }

  public navigateToUsuarios(): void {
    this.router.navigate(['/usuarios']);
  }
 

  }

