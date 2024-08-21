import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearCursoComponent } from './crear.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [CrearCursoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MessageModule
  ],
  exports: [CrearCursoComponent],
  providers: [MessageService]
})
export class CrearCursoModule {}
