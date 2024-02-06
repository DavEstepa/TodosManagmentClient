import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, of, throwError } from 'rxjs';
import { TODODto } from '../../../core/models/TODO.model';
import { ConstantProviderService } from '../../../shared/services/constant-provider.service';

@Injectable()
export class CreateTodoItemService {
  private controllerName = 'TODO';
  httpClient = inject(HttpClient);
  constructor(
    private constantsProviderService: ConstantProviderService) {}

  createTodo(data: TODODto): Observable<TODODto | null> {
    let body: TODODto = {...data, userCreated: '0000', createdAt: 'Lunes'};
    return this.httpClient.post<TODODto>(this.constantsProviderService.getURLAPI() + this.controllerName, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return of(null);
  }
}
