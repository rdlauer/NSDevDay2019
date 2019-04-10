///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ElementRef, ViewChild } from '@angular/core';
import { alert, prompt } from 'tns-core-modules/ui/dialogs/dialogs';

import { NavigationService } from '@src/app/core/services/navigation.service';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginViewBaseComponent {
    isLoading: boolean;
    user: any;
    @ViewChild('username')
    username: ElementRef;
    @ViewChild('password')
    password: ElementRef;

    navigationService: NavigationService;
    authenticationService: AuthenticationService;

    constructor(protected $injector: Injector) {
        this.navigationService = $injector.get(NavigationService);
        this.authenticationService = $injector.get(AuthenticationService);

        this.isLoading = false;
        this.user = {
            username: '',
            password: ''
        };
    }

    login() {
        this.authenticationService
            .signIn(this.user)
            .toPromise()
            .then(() => {
                this.isLoading = false;
                this.navigationService.goToRoot();
            })
            .catch(err => {
                this.isLoading = false;
                this.alert(`An error occurred: ${err}`);
            });
    }

    submit() {
        if (!this.user.username || !this.user.password) {
            this.alert('Please provide both username and password.');
            return;
        }

        if (this.isLoading) {
            return;
        }

        this.isLoading = true;
        this.authenticationService
            .signOut()
            .toPromise()
            .then(() => this.login());
    }

    navigateToRegister() {
        if (this.isLoading) {
            return;
        }

        this.navigationService.navigate(['system', 'register']);
    }

    forgotPassword() {
        if (this.isLoading) {
            return;
        }

        prompt({
            title: 'Forgot Password',
            message: 'Enter the email address you used to register to reset your password.',
            inputType: 'email',
            defaultText: '',
            okButtonText: 'Ok',
            cancelButtonText: 'Cancel'
        }).then(data => {
            if (!data.result) {
                return;
            }

            this.authenticationService
                .resetPassword(data.text.trim())
                .toPromise()
                .then(() => {
                    this.alert(
                        'Your password was successfully reset. Please check your email for instructions on choosing a new password.'
                    );
                })
                .catch(() => {
                    this.alert('Unfortunately, an error occurred resetting your password.');
                });
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    private alert(message: string) {
        return alert({
            title: '',
            okButtonText: 'OK',
            message: message
        });
    }
}
