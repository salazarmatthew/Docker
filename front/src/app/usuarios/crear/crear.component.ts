import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers: [MessageService]
})
export class CrearUsuarioComponent {
  usuario: Usuario = { id: 0, nombre: '', email: '', password: '' };

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private messageService: MessageService
  ) { }

  crearUsuario(): void {
    this.usuariosService.crear(this.usuario).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Usuario creado exitosamente' });
        this.router.navigate(['/usuarios']);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al crear el usuario' });
      }
    );
  }
}
