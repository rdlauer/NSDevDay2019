///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component } from '@angular/core';

import { KsChartsBaseComponent } from '@src/app/shared/components/charts.base.component';

@Component({
    selector: 'ks-bar-charts',
    templateUrl: './bar-charts.component.html',
})
export class KsBarChartsComponent extends KsChartsBaseComponent {
    public categories: any[];

    public ngOnInit() {
        super.ngOnInit();

        const categoryField = this.config.categoryAxis.field;
        
        if (categoryField) {
            this.dataService.dataChanges.subscribe(data => {
                this.categories =  data.data.map(item => item[categoryField]);
            });
        }
    }
}
