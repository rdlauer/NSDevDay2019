///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Directive, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Directive({
    selector: "[ksHideNavBar]"
})
export class HideNavBarDirective implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}