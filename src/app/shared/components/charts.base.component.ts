///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ChartComponent, SeriesClickEvent } from '@progress/kendo-angular-charts';

import { CollectionDataService } from '@src/app/core/data/collection-data.service';

export abstract class KsChartsBaseComponent implements OnInit {
    @ViewChild(ChartComponent) public kendoComponent: ChartComponent;
    @Input() public id: string;
    @Input() public dataService: CollectionDataService<any>;
    @Input() public model: any;
    @Input() public config: any;
    @Output() public seriesClick: EventEmitter<SeriesClickEvent> = new EventEmitter();

    public data: Observable<any[]>;

    public ngOnInit() {
        this.data = this.dataService.dataChanges.pipe(
            map(item => item.data)
        );
    }

    public seriesClickHandler(seriesClickEvent: SeriesClickEvent): void {
        this.model = seriesClickEvent.dataItem;
        this.seriesClick.emit(seriesClickEvent);
    }
}
