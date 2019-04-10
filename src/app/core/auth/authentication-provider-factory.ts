///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, Injector } from '@angular/core';

import { AuthenticationProviderFactoryInterface } from '@src/app/core/auth/authentication-provider-factory.interface';
import { AuthenticationProviderInterface } from '@src/app/core/auth/authentication-provider.interface';
import { KinveyAuthProvider } from '@src/app/core/auth/providers/kinvey-auth-provider';

@Injectable()
export class AuthenticationProviderFactory implements AuthenticationProviderFactoryInterface {
    constructor(private injector: Injector) {}

    createAuthProvider(type: string, settings: any): AuthenticationProviderInterface {
        switch (type) {
            case 'kinvey-auth':
                return new KinveyAuthProvider(settings, this.injector);

            default:
                break;
        }

        return null;
    }
}
