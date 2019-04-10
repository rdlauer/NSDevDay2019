/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { MobileListViewViewBaseComponent } from '@src/app/modules/claims/mobile-list-view/mobile-list-view.base.component';

export class MobileListViewViewComponent extends MobileListViewViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
