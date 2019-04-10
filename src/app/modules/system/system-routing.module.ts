///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from '@src/app/modules/system/login/login.component';
import { UnauthorizedPageViewComponent } from '@src/app/modules/system/unauthorized-page/unauthorized-page.component';

import { config } from '@src/app/modules/system/system-routing.config';

const routes: Routes = [
    {
        path: 'system',
        children: [
            {
                path: 'login',
                component: LoginViewComponent
            },
            {
                path: 'forbidden',
                component: UnauthorizedPageViewComponent
            }
        ]
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {}
