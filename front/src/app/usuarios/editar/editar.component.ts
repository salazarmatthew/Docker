import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Usuario = { id:0,nombre: '', email: '', password: '' };
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usuariosService.detalle(this.id).subscribe(data => {
      this.usuario = data;
    });
  }

  editarUsuario(): void {
    this.usuariosService.editar(this.id, this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}
