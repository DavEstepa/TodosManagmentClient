import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';

import { COMPOUND_ROUTES } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
    provideRouter(COMPOUND_ROUTES.routes.map((cr)=>cr.config)),
    provideAnimationsAsync()]
};
