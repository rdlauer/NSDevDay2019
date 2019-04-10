/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { MobileListViewFormViewBaseComponent } from '@src/app/modules/claims/mobile-list-view-form/mobile-list-view-form.base.component';

export class MobileListViewFormViewComponent extends MobileListViewFormViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
