import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ConstantProviderService } from './shared/services/constant-provider.service';
import { ToastModule } from 'primeng/toast';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { ToastProviderService } from './shared/services/toast-provider.service';
import { COMPOUND_ROUTES } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,ToastModule, HttpClientModule, NgIconComponent, RouterModule],
  providers: [MessageService, provideIcons(COMPOUND_ROUTES.ICONS)],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  constantsProviderService = inject(ConstantProviderService);
  toastService = inject(ToastProviderService);

  title = 'todo-improved-app';
  routes = COMPOUND_ROUTES.ROUTES_NAMES;
  titleGeneralPage = this.constantsProviderService.getApplicationName();
  userLogged = 'Peranito';
  message = 'es un sitio Web creado en Angular cuyo objetivo principal es brindar la funcionalidad de crear tareas, realizar un seguimiento de ellas, y en dado caso, permitir borrarlas o marcarlas como culminadas';
  activatedRoute = '';

  private suscriptions: Subscription[] = [];

  constructor(private messageService: MessageService){}

  ngOnInit(){
  }

  ngAfterViewInit(){
    let s = this.toastService.message$.subscribe((message)=>{
      this.messageService.add(message as Message);
    });
    this.suscriptions.push(s);
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(s => s.unsubscribe());
  }
}
