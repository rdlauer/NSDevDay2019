///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

import { NavigationService } from "@src/app/core/services/navigation.service";
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';
import { NetworkMonitoringService } from "@src/app/core/services/network-monitoring.service";

import { KinveyService } from '@src/app/core/data/kinvey.service';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { SessionStorageService } from '@src/app/core/session-storage.service';

import { config, transformConfig } from '@src/app/core/core.config';

const configMeta: NgModule = {
    providers: [
        ...config.providers
    ],
    declarations: [
        ...config.declarations
    ],
    imports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        ...config.imports
    ],
    exports: [
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        ...config.exports
    ],
    entryComponents: [
        ...config.entryComponents
    ],
    bootstrap: [
        ...config.bootstrap
    ],
    schemas: [
        NO_ERRORS_SCHEMA,
        ...config.schemas
    ],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ModalDialogService,
                SideDrawerService,
                NavigationService,
                KinveyService,
                DataServiceFactory,
                AuthenticationGuardService,
                AuthenticationService,
                SessionStorageService,
                NetworkMonitoringService,
                ...config.providers
            ]
        };
    }
}
