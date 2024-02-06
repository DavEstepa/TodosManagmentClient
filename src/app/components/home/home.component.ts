import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

  <h1 class="cover-heading">Bienvenido {{userLogged}}</h1>
  <p class="lead">{{titleGeneralPage}} {{message}}.</p>
  <p class="lead">
    <a href="#" class="btn btn-lg btn-secondary">Crear Tarea!!</a>
  </p>

  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  titleGeneralPage = 'por hacer...';
  userLogged = 'Peranito';
  message = 'es un sitio Web creado en Angular cuyo objetivo principal es brindar la funcionalidad de crear tareas, realizar un seguimiento de ellas, y en dado caso, permitir borrarlas o marcarlas como culminadas';
}
