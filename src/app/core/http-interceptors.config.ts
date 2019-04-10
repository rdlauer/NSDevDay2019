///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationInterceptor } from '@src/app/core/auth/authentication-interceptor';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true
    }
];
