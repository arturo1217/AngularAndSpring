import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: String = 'curso Spring 5 con Angular 8';
  estudiante: String = 'Arturo Buenahora Vergel';
}
