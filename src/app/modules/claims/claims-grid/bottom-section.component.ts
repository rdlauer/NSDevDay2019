/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional } from '@angular/core';
import { ClaimsGridViewComponent } from '@src/app/modules/claims/claims-grid/claims-grid.component';

@Component({
    selector: 'ks-bottom-section',
    templateUrl: './bottom-section.component.html'
})
export class BottomSectionComponent {
    constructor(@Optional() public parent: ClaimsGridViewComponent) {}
}
