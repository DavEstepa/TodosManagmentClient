import { HttpErrorResponse } from "@angular/common/http";
import { ToastProviderService } from "../../shared/services/toast-provider.service";
import { of } from "rxjs";

export function HandleError(error: HttpErrorResponse, showUIError: ToastProviderService | null = null){
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
      if(showUIError)showUIError.sendMessage({ severity: 'error', summary: 'Error', detail: error.message });
      return of(null);
}