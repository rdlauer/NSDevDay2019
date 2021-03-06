///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Input, Output, EventEmitter } from '@angular/core';

import { Observable, merge } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';
import { FormGroup } from '@angular/forms';

export abstract class KsDropDownBaseComponent extends KsInputBaseComponent {
    @Input() public dataService: CollectionDataService<any>;
    @Output() public filterChange: EventEmitter<string> = new EventEmitter();

    @Input() public get model(): any {
        return super.getModel<any>();
    }

    public set model(value: any) {
        super.setModel<any>(value);
    }

    public data: Observable<any>;

    protected preventPopupOpen = true;

    public ngOnInit() {
        super.ngOnInit();
        if (!this.dataService) {
            return;
        }
        
        this.data = this.getData();
    }

    public changeHandler(event: any): void {
        const fg: FormGroup = <FormGroup>this.viewFormArray.controls.find(c => (<FormGroup>c).controls[this.id] !== undefined);
        const { value } = fg.controls[this.id];
        super.updateModel(value);
    }

    public openHandler(event: any) {
        if (this.config.filterable && !this.config.clientFiltering) {
            event.preventDefault();
            this.preventPopupOpen = false;
        }
    }

    public filterHandler(filterValue: string): void {
        this.filterChange.emit(filterValue);
    }

    protected abstract getFilterFieldName(): string;
    protected abstract getChildFilterChange(): EventEmitter<string>;
    protected abstract openPopup(): void;

    protected getData(): Observable<any> {
        const dataChanges = this.dataService.dataChanges.pipe(
            map(item => item.data),
            tap(() => {
                if (!this.preventPopupOpen) {
                    this.openPopup();
                }
            })
        );

        if (this.config.filterable && this.config.clientFiltering) {
            const filterChange = this.getChildFilterChange().pipe(
                withLatestFrom(dataChanges),
                map(([filterValue, data]) => data.filter(item => this.filterItem(item, filterValue)))
            );

            return merge(dataChanges, filterChange);
        }

        if (this.config.filterable && !this.config.clientFiltering) {
            this.dataService.dataState.onChanges(this.getChildFilterChange().pipe(
                map(filterValue => {
                    if (!filterValue.length) {
                        return undefined;
                    }

                    const dataState = this.dataService.dataState.getCurrent();

                    dataState.filter = {
                        logic: 'or',
                        filters: [
                            {
                                field: this.getFilterFieldName(),
                                operator: this.config.filter.toLowerCase(),
                                value: filterValue,
                                ignoreCase: true
                            }
                        ]
                    };

                    return dataState;
                })
            ));
        }

        return dataChanges;
    }

    protected filterItem(item: any, filterValue: string): boolean {
        if (!filterValue || !this.getFilterFieldName()) {
            return true;
        }

        const itemText = item[this.getFilterFieldName()].toLowerCase();
        const filterText = filterValue.toLowerCase();

        switch (this.config.filter) {
            case 'StartsWith':
                return itemText.indexOf(filterText) === 0;
            case 'EndsWith':
                return itemText.indexOf(filterText, itemText.length - filterText.length) !== -1;
            case 'Contains':
                return itemText.indexOf(filterText) !== -1;
            default:
                return true;
        }
    }
}
