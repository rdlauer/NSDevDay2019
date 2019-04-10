///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { ClaimsGridViewBaseComponent } from '@src/app/modules/claims/claims-grid/claims-grid.base.component';
import { ClaimsGridViewComponent } from '@src/app/modules/claims/claims-grid/claims-grid.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/claims/claims-grid/bottom-section.component';
import { MiddleSectionComponent } from '@src/app/modules/claims/claims-grid/middle-section.component';
import { TopSectionComponent } from '@src/app/modules/claims/claims-grid/top-section.component';

import { config, transformConfig } from '@src/app/modules/claims/claims-grid/claims-grid.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        ClaimsGridViewBaseComponent,
        ClaimsGridViewComponent,
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [BottomSectionComponent, MiddleSectionComponent, TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class ClaimsGridViewModule {}
