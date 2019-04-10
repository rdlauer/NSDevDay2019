///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    template: ''
})
export class AppAuthCallbackComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit() {
        this.authenticationService.completeAuthentication().subscribe(state => {
            this.router.navigateByUrl(state.returnUrl);
        });
    }
}
