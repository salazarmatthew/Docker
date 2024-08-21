import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetailComponent } from './components/usuario-detail/usuario-detail.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoDetailComponent } from './components/curso-detail/curso-detail.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioDetailComponent,
    CursoListComponent,
    CursoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
