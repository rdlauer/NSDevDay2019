///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, EventEmitter } from '@angular/core';

import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';

import { KsDropDownBaseComponent } from '@src/app/shared/components/drop-down.base.component';

@Component({
    selector: 'ks-auto-complete',
    templateUrl: './auto-complete.component.html',
    styles: [
        `
        .ks-auto-complete kendo-autocomplete {
            width: 100%;
        }
        `
    ]
})
export class KsAutoCompleteComponent extends KsDropDownBaseComponent {
    @ViewChild('kendoComponent') public kendoComponent: AutoCompleteComponent;

    protected getFilterFieldName(): string {
        return this.config.dataTextField;
    }

    protected getChildFilterChange(): EventEmitter<string> {
        return this.kendoComponent.filterChange;
    }

    protected openPopup(): void {
        this.kendoComponent.toggle(true);  
    }
}
