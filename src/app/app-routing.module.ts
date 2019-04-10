///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthCallbackComponent } from '@src/app/app-auth-callback.component';
import { AppLayoutViewComponent } from '@src/app/modules/system/app-layout/app-layout.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/app-routing.config';

const routes: Routes = [
    {
        path: 'auth-callback',
        component: AppAuthCallbackComponent
    },
    {
        path: '',
        component: AppLayoutViewComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: 'claims',
                loadChildren: '@src/app/modules/claims/claims.module#ClaimsModule'
            }
        ]
    },
    ...config.routes,
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
