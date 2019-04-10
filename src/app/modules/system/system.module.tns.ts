///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { SystemRoutingModule } from '@src/app/modules/system/system-routing.module';

import { HomeViewComponent } from '@src/app/modules/system/home/home.component';
import { LoginViewComponent } from '@src/app/modules/system/login/login.component';
import { RegisterViewComponent } from '@src/app/modules/system/register/register.component';

import { config, transformConfig } from '@src/app/modules/system/system.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [HomeViewComponent, LoginViewComponent, RegisterViewComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, SystemRoutingModule, ...config.imports],
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
