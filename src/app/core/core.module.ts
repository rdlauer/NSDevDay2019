///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '@progress/kendo-angular-l10n';

import { RoleService } from '@src/app/core/auth/role.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';
import { AUTHENTICATION_PROVIDER_FACTORIES } from '@src/app/core/auth/authentication-provider-factory.interface';
import { AuthenticationProviderFactory } from '@src/app/core/auth/authentication-provider-factory';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthorizationService } from '@src/app/core/auth/authorization.service';
import { AuthorizationGuardService } from '@src/app/core/auth/authorization-guard.service';

import { DataProviderService } from '@src/app/core/data/data-provider.service';
import { KinveyService } from '@src/app/core/data/kinvey.service';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';

import { LocalStorageService } from '@src/app/core/local-storage.service';
import { SessionStorageService } from '@src/app/core/session-storage.service';
import { TranslationsProvider } from '@src/app/core/translations.provider';
import { httpInterceptorProviders } from '@src/app/core/http-interceptors.config';
import { NotificationService } from '@src/app/core/notification/notification.service';
import { ErrorHandlingService } from '@src/app/core/error-handling.service';

import { environment } from '@src/environments/environment';
import { config, transformConfig } from '@src/app/core/core.config';

export function authenticationFactory() {
    return environment.getAuthentication();
}

export function windowFactory(): any {
    return window;
}

const configMeta: NgModule = {
    providers: [
        { provide: 'Window', useFactory: windowFactory },
        DataProviderService,
        KinveyService,
        DataServiceFactory,
        LocalStorageService,
        SessionStorageService,
        RoleService,
        TranslationsProvider,
        {
            provide: MessageService,
            useClass: TranslationsProvider
        },
        {
            provide: 'AuthenticationConfig',
            useFactory: authenticationFactory
        },
        AuthenticationService,
        {
            provide: AUTHENTICATION_PROVIDER_FACTORIES,
            useClass: AuthenticationProviderFactory,
            multi: true
        },
        AuthenticationGuardService,
        AuthorizationService,
        AuthorizationGuardService,
        NotificationService,
        ErrorHandlingService,
        httpInterceptorProviders,
        ...config.providers
    ],
    declarations: [
        ...config.declarations
    ],
    imports: [
        HttpClientModule,
        ...config.imports
    ],
    exports: [
        ...config.exports
    ],
    entryComponents: [
        ...config.entryComponents
    ],
    bootstrap: [
        ...config.bootstrap
    ],
    schemas: [
        ...config.schemas
    ],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class CoreModule {
    // A guard preventing CoreModule to be accidentally imported multiple times
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already imported in the AppModule');
        }
    }
}
