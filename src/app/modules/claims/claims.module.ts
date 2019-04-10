///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ClaimsModuleComponent } from '@src/app/modules/claims/claims.component';
import { ClaimsRoutingModule } from '@src/app/modules/claims/claims-routing.module';
import { AppLayoutViewModule } from '@src/app/modules/system/app-layout/app-layout.module';
import { ClaimsGridViewModule } from '@src/app/modules/claims/claims-grid/claims-grid.module';

import { config, transformConfig } from '@src/app/modules/claims/claims.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ClaimsModuleComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, ClaimsGridViewModule, ClaimsRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ClaimsModule {}
