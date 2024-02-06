import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ConstantProviderService } from '../../shared/services/constant-provider.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  template: `

  <h1 class="cover-heading">Bienvenido {{userLogged}}</h1>
  <p class="lead">{{titleGeneralPage}} {{message}}.</p>
  <p class="lead">
  <button mat-raised-button color="primary">Crear tarea</button>
  </p>

  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constantsProviderService = inject(ConstantProviderService);

  titleGeneralPage = this.constantsProviderService.getApplicationName();
  userLogged = 'Peranito';
  message = 'es un sitio Web creado en Angular cuyo objetivo principal es brindar la funcionalidad de crear tareas, realizar un seguimiento de ellas, y en dado caso, permitir borrarlas o marcarlas como culminadas';
}
