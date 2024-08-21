import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Asegúrate de que el nombre del archivo es correcto
import { appConfig } from './app/app.config'; // Asegúrate de que el nombre del archivo es correcto

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
