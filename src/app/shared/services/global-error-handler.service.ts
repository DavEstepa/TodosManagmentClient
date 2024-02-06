import { ErrorHandler, Injectable } from '@angular/core';
import { ToastProviderService } from './toast-provider.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private toastService: ToastProviderService) { }
  handleError(error: any): void {
    this.toastService.sendMessage({ severity: 'error', summary: 'Error', detail: error.message });
  }

}
