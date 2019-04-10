///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Directive, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Directive({
    selector: "[ksShowNavBar]"
})
export class ShowNavBarDirective implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = false;
    }
}