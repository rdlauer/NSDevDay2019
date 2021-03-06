///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { Observable, Subject, Subscription, combineLatest, from } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';

import { Kinvey, InvalidCredentialsError, NoActiveUserError } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { CompositeFilterDescriptor, FilterDescriptor, isCompositeFilterDescriptor } from '@src/app/core/data/state/filter-descriptor.interface';
import { NetworkMonitoringService } from '@src/app/core/services/network-monitoring.service';

@Injectable()
export class KinveyService {
    protected dataReload: { [key: string]: Subject<any> } = {};
    protected syncCollection: { [key: string]: Subscription } = {};

    constructor(protected networkMonitoringService: NetworkMonitoringService) {
        Kinvey.init({} as Kinvey.ClientConfig);
    }

    public findById(config: KinveyServiceConfig, id: string): Observable<any> {
        return from( // To be removed when kinvey sdk depends on rxjs v6
            this.getDataStoreCollection(config).findById(id, config.requestOptions)
        );
    }

    public find(config: KinveyServiceConfig, state: CollectionState): Observable<any[]> {
        const dataStoreCollection = this.getDataStoreCollection(config);
        const query = this.dataStateToKinveyQuery(state);

        // TODO: Remove from() when kinvey sdk depends on rxjs v6
        return from(dataStoreCollection.find(query, config.requestOptions));
    }

    public findWithCount(config: KinveyServiceConfig, state: CollectionState): Observable<ModelDataResult<any>> {
        const dataStoreCollection = this.getDataStoreCollection(config);
        const query = this.dataStateToKinveyQuery(state);

        return combineLatest(
            dataStoreCollection.find(query, config.requestOptions),
            dataStoreCollection.count(query, config.requestOptions)
        ).pipe(
            map(([data, total]) => ({ data, total }))
        );
    }

    public save(config: KinveyServiceConfig, item) {
        const savePromise = this.getDataStoreCollection(config)
            .save(item, config.requestOptions);

        return this.networkMonitoringService.isOnline
            ? savePromise
            : new Promise(resolve => {
                setTimeout(() => resolve(item), 200);
            });
    }

    public remove(config: KinveyServiceConfig, item) {
        return this.getDataStoreCollection(config)
            .removeById(item._id, config.requestOptions);
    }

    public filesUpload(config: KinveyServiceConfig, file: {}, metadata?: Kinvey.FileMetadata) {
        return Kinvey.Files.upload(file, metadata, config.requestOptions);
    }

    public getDataReload(key: string) {
        this.dataReload[key] = this.dataReload[key] || new Subject<any>();
        return this.dataReload[key];
    }

    public isAuthError(error: Error) {
        return error instanceof InvalidCredentialsError || error instanceof NoActiveUserError;
    }

    protected getDataStoreCollection(config: KinveyServiceConfig) {
        const dataStoreCollection = Kinvey.DataStore.collection(config.collection, config.dataStoreType);
        this.sync(config.collection, dataStoreCollection);
        return dataStoreCollection;
    }

    protected sync(collectionName: string, dataStoreCollection: Kinvey.CacheStore<Kinvey.Entity>) {
        if (this.syncCollection[collectionName] || !dataStoreCollection.pendingSyncCount) {
            return;
        }

        this.syncCollection[collectionName] = this.networkMonitoringService.connectionObservable
            .pipe(
                filter(isOnline => isOnline),
                flatMap(() => from(dataStoreCollection.pendingSyncCount())),
                filter((count: any) => count > 0),
                flatMap(() => from(dataStoreCollection.sync()))
            )
            .subscribe(() => {
                const dr = this.getDataReload(collectionName);
                dr.next();
            });
    }

    protected dataStateToKinveyQuery(dataState: CollectionState): Kinvey.Query {
        const query = new Kinvey.Query();

        if (typeof dataState.filter !== 'undefined') {
            query.filter = this.buildCompositeFilter(dataState.filter);
        }

        query.skip = dataState.skip || 0;
        query.limit = dataState.take || 20;

        if (typeof dataState.sort !== 'undefined') {
            const sortDef = {};

            dataState.sort.forEach(item => {
                if (item.dir && item.dir === 'desc') {
                    query.descending(item.field);
                } else {
                    query.ascending(item.field);
                }
            });
        }

        return query;
    }

    protected buildCompositeFilter(filterDesc: CompositeFilterDescriptor): object {
        if (filterDesc.filters.length === 0) {
            return {};
        }

        return {
            ['$' + filterDesc.logic]: filterDesc.filters.map(item => {
                if (isCompositeFilterDescriptor(item)) {
                    return this.buildCompositeFilter(item as CompositeFilterDescriptor);
                }

                return this.buildFilter(item as FilterDescriptor);
            })
        };
    }

    protected buildFilter(filterDesc: FilterDescriptor): object {
        if (!filterDesc.field && typeof filterDesc.field !== 'string') {
            return {};
        }

        const field = filterDesc.field as string;
        let value: any;

        switch (filterDesc.operator) {
            case 'eq':
                value = filterDesc.value;
                break;

            case 'neq':
                value = {
                    $ne: filterDesc.value
                };
                break;

            case 'isnull':
                value = null;
                break;

            case 'isnotnull':
                value = {
                    $ne: null
                };
                break;

            case 'lt':
            case 'lte':
            case 'gt':
            case 'gte':
                value = {
                    ['$' + filterDesc.operator]: filterDesc.value
                };
                break;

            case 'startswith':
                value = {
                    $regex: '^' + this.filterValueAsRegExp(filterDesc)
                };
                break;

            case 'endswith':
                value = {
                    $regex: '^.*' + this.filterValueAsRegExp(filterDesc) + '$'
                };
                break;

            case 'contains':
                value = {
                    $regex: '^.*' + this.filterValueAsRegExp(filterDesc) + '.*'
                };
                break;

            case 'doesnotcontain':
                value = {
                    $regex: '^((?!' + this.filterValueAsRegExp(filterDesc) + ').)*$'
                };
                break;

            case 'isempty':
                value = '';
                break;

            case 'isnotempty':
                value = {
                    $ne: ''
                };
                break;

            default:
                break;
        }

        return {
            [field]: value
        };
    }

    protected filterValueAsRegExp(filterDesc: FilterDescriptor): string {
        const value: string = (filterDesc.value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        if (filterDesc.ignoreCase) {
            return value
                .split('')
                .map(char => {
                    const upper = char.toUpperCase();
                    const lower = char.toLowerCase();
                    return upper !== lower ? `[${upper}${lower}]` : char;
                })
                .join('');
        }

        return value;
    }
}
