///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input } from "@angular/core";

import { isAndroid } from 'tns-core-modules/platform';

import { CollectionDataService } from '@src/app/core/data/collection-data.service';

@Component({
    selector: 'ks-search-bar',
    templateUrl: './search-bar.component.html'
})
export class KSSearchBarComponent {
    @Input()
    public dataService: CollectionDataService<any>;

    @Input()
    public searchBy: string[];

    @Input()
    public ignoreCase: boolean;

    public onTextChanged({ object: searchBar }) {
        if (!this.searchBy.length) {
            return;
        }

        const dataState = this.dataService.dataState.getCurrent();

        if (!searchBar.text) {
            delete dataState.filter;
        } else {
            const filters = this.searchBy.map(item => {
                return {
                    field: item,
                    operator: 'contains',
                    value: searchBar.text,
                    ignoreCase: this.ignoreCase
                };
            });

            dataState.filter = {
                logic: 'or',
                filters
            };
        }

        this.dataService.dataState.update(dataState);
    }

    public hideKeyboard({ object: searchBar }) {
        if (searchBar) {
            searchBar.dismissSoftInput();

            if (isAndroid) {
                searchBar.android.clearFocus();
            }
        }
    }
}
