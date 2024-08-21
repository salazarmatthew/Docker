import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './crear.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [CrearUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessagesModule,
    MessageModule
  ],
  exports: [CrearUsuarioComponent]
})
export class CrearUsuarioModule {}
