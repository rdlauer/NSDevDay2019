///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthorizationService } from '@src/app/core/auth/authorization.service';

@Injectable()
export class AuthorizationGuardService implements CanActivate {
    constructor(
        private authorizationService: AuthorizationService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!route.data) {
            return  true;
        }

        const isAuthorized = this.authorizationService.isAuthorized(route.data.authorization);
        if (!isAuthorized) {
            this.router.navigate(['system/forbidden']);
        }

        return isAuthorized;
    }
}
