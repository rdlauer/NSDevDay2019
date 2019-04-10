///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { AuthenticationService } from '@src/app/core/auth/authentication.service';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';

@Component({
    templateUrl: 'app.component.html',
    styleUrls: ['app.custom.tns.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;

    get user() {
        return this.authenticationService.activeUser;
    }

    get sideDrawerGesturesEnabled(): boolean {
        return this.sideDrawerService.isEnabled;
    }

    constructor(
        private authenticationService: AuthenticationService,
        private navigationService: NavigationService,
        private sideDrawerService: SideDrawerService
    ) {}

    ngAfterViewInit(): void {
        if (this.drawerComponent) {
            this.sideDrawerService.initialize(this.drawerComponent.sideDrawer);
        }
    }

    logout() {
        this.sideDrawerService.close();
        this.authenticationService
            .signOut()
            .toPromise()
            .then(() => this.authenticationService.authenticate());
    }

    open(path: string) {
        this.sideDrawerService.close();
        this.navigationService.navigate([path]);
    }
}
