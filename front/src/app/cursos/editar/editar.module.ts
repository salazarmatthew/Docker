import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditarCursoComponent } from './editar.component';

@NgModule({
  declarations: [EditarCursoComponent],
  imports: [CommonModule, FormsModule],
  exports: [EditarCursoComponent]
})
export class EditarCursoModule {}
