///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

import { KsDropDownBaseComponent } from '@src/app/shared/components/drop-down.base.component';

@Component({
    selector: 'ks-combo-box',
    templateUrl: './combo-box.component.html',
    styles: [
        `
        .ks-combo-box kendo-combobox {
            width: 100%;
        }
        `
    ]
})
export class KsComboBoxComponent extends KsDropDownBaseComponent {
    @ViewChild('kendoComponent') public kendoComponent: ComboBoxComponent;
    @Output() public selectionChange: EventEmitter<any> = new EventEmitter();

    public selectionHandler(event: any): void {
        this.selectionChange.emit(event);
    }

    protected getFilterFieldName(): string {
        return this.config.textField;
    }

    protected getChildFilterChange(): EventEmitter<string> {
        return this.kendoComponent.filterChange;
    }

    protected openPopup(): void {
        this.kendoComponent.toggle(true);  
    }
}
