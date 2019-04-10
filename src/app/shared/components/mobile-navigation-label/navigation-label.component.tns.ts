///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '@src/app/core/services/navigation.service';

@Component({
    selector: 'ks-navigation-label',
    templateUrl: './navigation-label.component.html'
})
export class KSNavigationLabelComponent {
    @Input()
    public text: string;

    @Input()
    public tapArgs: Array<string>;

    constructor(
        protected navigationService: NavigationService,
        protected activatedRoute: ActivatedRoute) { }

    public onItemTap() {
        if (!this.tapArgs || !this.tapArgs.length) {
            return;
        }

        this.navigationService.navigate(this.tapArgs, { relativeTo: this.activatedRoute });
    }
}
