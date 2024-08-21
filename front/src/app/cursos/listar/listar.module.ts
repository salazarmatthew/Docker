import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarCursosComponent } from './listar.component';
import { MessagesModule } from 'primeng/messages'; // Asegúrate de importar MessagesModule
import { MessageModule } from 'primeng/message'; // Importa MessageModule si también lo usas

@NgModule({
  declarations: [ListarCursosComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MessagesModule, // Asegúrate de importar MessagesModule
    MessageModule // Importa MessageModule si también lo usas
  ],
  exports: [ListarCursosComponent]
})
export class ListarCursosModule {}
