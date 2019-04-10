///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { AppTabsComponent } from '@src/app/app-tabs.component';
import { CoreModule } from '@src/app/core/core.module';
import { AppConfigService } from '@src/app/core/app-config.service';
import { SharedModule } from '@src/app/shared/shared.module';

import { config, transformConfig } from '@src/app/app.config';

const configMeta: NgModule = {
    providers: [
        AppConfigService,
        ...config.providers
    ],
    declarations: [
        AppComponent,
        AppTabsComponent,
        ...config.declarations
    ],
    imports: [
        SharedModule,
        NativeScriptModule,
        AppRoutingModule,
        CoreModule,
        CoreModule.forRoot(),
        ...config.imports
    ],
    exports: [
        ...config.exports
    ],
    entryComponents: [
        ...config.entryComponents
    ],
    bootstrap: [
        AppComponent,
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
export class AppModule { }
