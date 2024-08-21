import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar.component';

@NgModule({
  declarations: [EditarUsuarioComponent],
  imports: [CommonModule, FormsModule],
  exports: [EditarUsuarioComponent]
})
export class EditarUsuarioModule {}
