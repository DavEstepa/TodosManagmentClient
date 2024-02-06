import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-improved-app';
  routes = ['Crear', 'Listar'];
  titleGeneralPage = 'por hacer...';
  userLogged = 'Peranito';
  message = 'es un sitio Web creado en Angular cuyo objetivo principal es brindar la funcionalidad de crear tareas, realizar un seguimiento de ellas, y en dado caso, permitir borrarlas o marcarlas como culminadas';
}
