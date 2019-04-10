///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { KsDropDownBaseComponent } from '@src/app/shared/components/drop-down.base.component';

@Component({
    selector: 'ks-drop-down-list',
    templateUrl: './drop-down-list.component.html',
    styles: [
        `
        .ks-drop-down-list kendo-dropdownlist {
            width: 100%;
        }
        `
    ]
})
export class KsDropDownListComponent extends KsDropDownBaseComponent {
    @ViewChild('kendoComponent') public kendoComponent: DropDownListComponent;
    @Output() public selectionChange: any = new EventEmitter();
    public defaultItem: any;

    public ngOnInit(): void {
        super.ngOnInit();
        this.initDefaultItem();
    }

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

    private initDefaultItem(): void {
        if(this.config.defaultItem) {
            this.defaultItem = {};
            this.defaultItem[this.config.valueField] = null;
            this.defaultItem[this.config.textField] = this.config.defaultItem;
        }
    }
}