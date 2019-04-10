///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MobileListViewFormViewComponent } from '@src/app/modules/claims/mobile-list-view-form/mobile-list-view-form.component';
import { MobileListViewViewComponent } from '@src/app/modules/claims/mobile-list-view/mobile-list-view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/claims/claims-routing.config';

const routes: Routes = [
    {
        path: 'mobile-list-view-form/:id',
        canActivate: [AuthenticationGuardService],
        component: MobileListViewFormViewComponent
    },
    {
        path: 'mobile-list-view-form',
        canActivate: [AuthenticationGuardService],
        component: MobileListViewFormViewComponent
    },
    {
        path: 'mobile-list-view',
        canActivate: [AuthenticationGuardService],
        component: MobileListViewViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClaimsRoutingModule {}
