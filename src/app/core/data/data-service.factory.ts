///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable, Injector } from '@angular/core';

import { AggregationServiceConfig } from '@src/app/core/data/aggregation-service.config';
import { AggregationDataService } from '@src/app/core/data/aggregation-data.service';
import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { EntityDataService } from '@src/app/core/data/entity-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { AggregationState } from '@src/app/core/data/state/aggregation-state.interface';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';

@Injectable()
export class DataServiceFactory {
    constructor(protected injector: Injector) {}

    public collection<T>(config: KinveyServiceConfig, initialState?: CollectionState): CollectionDataService<T> {
        if (initialState) {
            initialState.take = initialState.take || config.pageSize;
        }

        return new CollectionDataService<T>(this.injector, config, initialState);
    }

    public entity<T>(config: KinveyServiceConfig, id?: string): EntityDataService<T> {
        return new EntityDataService(this.injector, config, id ? { id } : undefined);
    }

    public aggregation<T>(config: AggregationServiceConfig, initialState?: AggregationState): AggregationDataService<T>  {
        return new AggregationDataService<T>(this.injector, config, initialState);
    }
}
