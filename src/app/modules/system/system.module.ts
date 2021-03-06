///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SystemModuleComponent } from '@src/app/modules/system/system.component';
import { SystemRoutingModule } from '@src/app/modules/system/system-routing.module';
import { LandingPageViewModule } from '@src/app/modules/system/landing-page/landing-page.module';
import { LoginViewModule } from '@src/app/modules/system/login/login.module';
import { UnauthorizedPageViewModule } from '@src/app/modules/system/unauthorized-page/unauthorized-page.module';

import { config, transformConfig } from '@src/app/modules/system/system.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [SystemModuleComponent, ...config.declarations],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        LandingPageViewModule,
        LoginViewModule,
        UnauthorizedPageViewModule,
        SystemRoutingModule,
        ...config.imports
    ],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class SystemModule {}
