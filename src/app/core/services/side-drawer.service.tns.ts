///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Injectable()
export class SideDrawerService {
    private sideDrawer: RadSideDrawer;
    private forceDisable: boolean = false;
    private enableDrawerForRoute: boolean = false;

    get isEnabled(): boolean {
        return !this.forceDisable && this.enableDrawerForRoute && !!this.sideDrawer;
    }

    constructor(router: Router, zone: NgZone) {
        this.listenForDefaultRoute(router, zone);
    }

    initialize(sideDrawer: RadSideDrawer): void {
        this.sideDrawer = sideDrawer;
    }

    open(): void {
        if (this.isEnabled) {
            this.sideDrawer.showDrawer();
        }
    }

    close(): void {
        if (this.isEnabled) {
            this.sideDrawer.closeDrawer();
        }
    }

    private listenForDefaultRoute(router: Router, zone: NgZone): void {
        router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => router.routerState.root.firstChild.snapshot.data)
            )
            .subscribe(({ enableDrawer } = {}) => {
                zone.run(() => (this.enableDrawerForRoute = !!enableDrawer));
            });
    }
}
