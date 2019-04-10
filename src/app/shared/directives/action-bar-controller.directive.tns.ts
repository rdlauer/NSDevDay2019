///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Directive, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActionItem, NavigationButton } from 'tns-core-modules/ui/action-bar/action-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import * as app from 'tns-core-modules/application/application';
import { NavigationService } from '@src/app/core/services/navigation.service';
import { SideDrawerService } from '@src/app/core/services/side-drawer.service';

@Directive({
    // tslint:disable-next-line
    selector: 'ActionBar'
})
export class ActionBarControllerDirective implements OnInit, OnDestroy {
    private onDestroyActions: Function[] = [];

    constructor(
        private el: ElementRef,
        private page: Page,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private sideDrawerService: SideDrawerService
    ) {}

    ngOnInit(): void {
        this.page.actionBarHidden = false;
        this.setupAndroidBackPress();

        if (this.canGoBack()) {
            this.addNavButton();
            return;
        }

        this.addSideButton();
    }

    ngOnDestroy() {
        this.onDestroyActions.forEach(action => action());
        this.onDestroyActions = [];
    }

    private addNavButton() {
        let backButton = new NavigationButton();
        this.page.actionBar.navigationButton = backButton;

        if (isAndroid) {
            backButton.android.systemIcon = 'ic_menu_back';
        } else {
            this.page.actionBar.navigationButton.visibility = 'collapsed';

            backButton = new ActionItem();
            backButton.text = `${String.fromCharCode(0x2770)} Back`;

            this.page.actionBar.actionItems.addItem(backButton);
        }

        backButton.on('tap', () => this.goBack());
    }

    private addSideButton() {
        if (!this.sideDrawerService.isEnabled) {
            return;
        }

        let btn: any;
        const actionBar = this.el.nativeElement;

        if (isAndroid) {
            btn = new NavigationButton();
            btn.icon = 'res://menu';
            actionBar.navigationButton = btn;
        } else {
            btn = new ActionItem();
            btn.icon = 'res://navigation/menu';
            btn.ios.position = 'left';
            actionBar.actionItems.addItem(btn);
        }

        btn.on('tap', () => this.sideDrawerService.open());
    }

    private canGoBack(activatedRoute: ActivatedRoute = this.activatedRoute) {
        return this.navigationService.canGoBack(activatedRoute);
    }

    private goBack(activatedRoute: ActivatedRoute = this.activatedRoute) {
        return this.navigationService.goBack(activatedRoute);
    }

    private setupAndroidBackPress(): void {
        if (!isAndroid) {
            return;
        }

        const activatedRoutePath = this.activatedRoute.snapshot.pathFromRoot.map(x => x.url[0]).join('/');
        const backPressedHandler = (args: any) => {
            args.cancel = true;

            if (activatedRoutePath !== this.router.url) {
                return;
            }

            if (this.canGoBack()) {
                this.goBack();
            }
        };

        app.android.on(app.AndroidApplication.activityBackPressedEvent, backPressedHandler);
        this.onDestroyActions.push(() => {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, backPressedHandler);
        });
    }
}
