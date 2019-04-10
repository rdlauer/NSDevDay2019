///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from "tns-core-modules/data/observable";
import { NavigationService } from '@src/app/core/services/navigation.service';

@Component({
    selector: 'ks-button',
    templateUrl: './button.component.html'
})
export class KSButtonComponent {
    @Input()
    public navigateTo: any;

    constructor(
        protected navigationService: NavigationService,
        protected activatedRoute: ActivatedRoute) { }

    public onTap(args: EventData, id: string) {
        if (!this.navigateTo || !this.navigateTo.module || !this.navigateTo.view) {
            return;
        }

        const command = [this.navigateTo.module, this.navigateTo.view];
        if (id) {
            command.push(id);
        }

        this.navigationService.navigate(command, { relativeTo: this.activatedRoute });
    }
}
