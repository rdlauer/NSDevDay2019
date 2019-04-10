///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    selector: 'ks-user-drop-down',
    templateUrl: './user-drop-down.component.html',
})
export class KsUserDropDownComponent implements OnInit {
    public hasAuthProviders: boolean;
    public showSignOut = false;
    private canShowSignOut = false;

    constructor (private router: Router, private authenticationService: AuthenticationService) {
        this.hasAuthProviders = this.authenticationService.requireSignIn;
        this.showSignOut = false;
    }

    public ngOnInit() {
        this.authenticationService.isAuthenticated().subscribe(isAuthenticated => {
            this.canShowSignOut = isAuthenticated;
        });
    }

    public toggleSignOut() {
        if (this.canShowSignOut) {
            this.showSignOut = !this.showSignOut;
        }
    }

    public signOut() {
        this.authenticationService.signOut().subscribe(() => {
            this.router.navigate(['/']);
        });
    }
}
