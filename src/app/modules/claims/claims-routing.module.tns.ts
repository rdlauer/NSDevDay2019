///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/claims/claims-routing.config';

const routes: Routes = [...config.routes];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClaimsRoutingModule {}
