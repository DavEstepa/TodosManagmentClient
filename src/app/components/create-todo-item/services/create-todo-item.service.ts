import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, of, throwError } from 'rxjs';
import { TODODto } from '../../../core/models/TODO.model';
import { ConstantProviderService } from '../../../shared/services/constant-provider.service';
import { ToastProviderService } from '../../../shared/services/toast-provider.service';
import { HandleError } from '../../../core/utilities/handle-http-errors.function';

@Injectable()
export class CreateTodoItemService {
  private controllerName = 'TODO';
  httpClient = inject(HttpClient);
  constructor(
    private constantsProviderService: ConstantProviderService,
    private toastService: ToastProviderService) {}

  createTodo(data: TODODto): Observable<TODODto | null> {
    let body: TODODto = {...data, userCreated: '0000', createdAt: 'Lunes'};
    return this.httpClient.post<TODODto>(this.constantsProviderService.getURLAPI() + this.controllerName, body).pipe(
      catchError(err => HandleError(err, this.toastService))
    );
  }
}
