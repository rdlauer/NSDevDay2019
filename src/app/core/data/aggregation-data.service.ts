///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';

import { Observable } from 'rxjs';

import { AggregationServiceConfig } from '@src/app/core/data/aggregation-service.config';
import { AggregationState } from '@src/app/core/data/state/aggregation-state.interface';
import { BaseDataService } from '@src/app/core/data/base-data.service';

export class AggregationDataService<T> extends BaseDataService<T, AggregationServiceConfig, AggregationState> {
    constructor(protected injector: Injector, config: AggregationServiceConfig, initialState?: AggregationState) {
        super(config, initialState);
    }

    public refresh(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    protected getDataChanges(): Observable<any> {
        throw new Error('Method not implemented.');
    }
}
