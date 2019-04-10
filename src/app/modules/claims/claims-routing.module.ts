///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsModuleComponent } from '@src/app/modules/claims/claims.component';
import { ClaimsGridViewComponent } from '@src/app/modules/claims/claims-grid/claims-grid.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthorizationGuardService } from '@src/app/core/auth/authorization-guard.service';

import { config } from '@src/app/modules/claims/claims-routing.config';

const routes: Routes = [
    {
        path: '',
        component: ClaimsModuleComponent,
        canActivate: [AuthenticationGuardService, AuthorizationGuardService],
        canActivateChild: [AuthenticationGuardService],
        data: {
            authorization: {
                allowedRoles: []
            }
        },
        children: [
            {
                path: '',
                redirectTo: 'claims-grid',
                pathMatch: 'full'
            },
            {
                path: 'claims-grid',
                component: ClaimsGridViewComponent
            }
        ]
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaimsRoutingModule {}
