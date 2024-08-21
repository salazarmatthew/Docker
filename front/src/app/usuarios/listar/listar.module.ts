import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from './listar.component';

@NgModule({
  declarations: [ListarUsuariosComponent],
  imports: [CommonModule, RouterModule],
  exports: [ListarUsuariosComponent]
})
export class ListarUsuarioModule {}
