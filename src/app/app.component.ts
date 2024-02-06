import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConstantProviderService } from './shared/services/constant-provider.service';
import { ToastModule } from 'primeng/toast';
import { Message, MessageService } from 'primeng/api';
import { ToastProviderService } from './shared/services/toast-provider.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MessageService],
  imports: [RouterOutlet, CommonModule,ToastModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  constantsProviderService = inject(ConstantProviderService);
  toastService = inject(ToastProviderService);

  title = 'todo-improved-app';
  routes = ['Crear', 'Listar'];
  titleGeneralPage = this.constantsProviderService.getApplicationName();
  userLogged = 'Peranito';
  message = 'es un sitio Web creado en Angular cuyo objetivo principal es brindar la funcionalidad de crear tareas, realizar un seguimiento de ellas, y en dado caso, permitir borrarlas o marcarlas como culminadas';

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
