///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, Subject, Subscription, combineLatest, from } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';

import { State, FilterDescriptor, CompositeFilterDescriptor, isCompositeFilterDescriptor } from '@progress/kendo-data-query';

import { DataServiceRequest } from '@src/app/core/data/data-service-request';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { KinveyFileMetadata } from '@src/app/core/data/kinvey-file-metadata';
import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { DataProviderService } from '@src/app/core/data/data-provider.service';
import { DATA_PROVIDER_HEADER } from '@src/app/core/constants';

const ID_FIELD = '_id';

@Injectable()
export class KinveyService {
    protected dataReload: { [key: string]: Subject<any> } = {};

    constructor(protected http: HttpClient, protected dataProviderService: DataProviderService) { }

    public findById(config: KinveyServiceConfig, id: string): Observable<any> {
        const collectionResource = this.getCollectionResource(config);
        const url = `${this.getAbsoluteUrl(config, { url: collectionResource })}/${id}`;
        
        return this.request(config, 'GET', url, { observe: 'response' }).pipe(
            map(response => response.body)
        );
    }

    public find(config: KinveyServiceConfig, state: CollectionState): Observable<any[]> {
        const collectionResource = this.getCollectionResource(config);
        const url = this.getAbsoluteUrl(config, { url: collectionResource });

        return this.request(config, 'GET', url, {
            params: this.getRequestParams(state),
            observe: 'response'
        }).pipe(
            map(response => response.body as any[])
        );
    }

    public findWithCount(config: KinveyServiceConfig, state: CollectionState): Observable<ModelDataResult<any>> {
        return combineLatest(
            this.find(config, state),
            this.count(config, state),
        ).pipe(
            map(([data, total]) => ({ data, total }))
        );
    }

    public save(config: KinveyServiceConfig, item): Promise<any> {
        let httpMethod = 'POST';
        let url = this.getAbsoluteUrl(config, { url: this.getCollectionResource(config) });

        if (item[ID_FIELD]) {
            httpMethod = 'PUT'
            url += `/${item[ID_FIELD]}`;
        }

        return this.request(config, httpMethod, url, {
            body: item,
            observe: 'response'
        }).pipe(
            map(response => response.body)
        ).toPromise();
    }

    public remove(config: KinveyServiceConfig, item): Promise<any> {
        const url = this.getAbsoluteUrl(config, { url: `${this.getCollectionResource(config)}/${item[ID_FIELD]}` });
        return this.request(config, 'DELETE', url, { observe: 'response' }).toPromise();
    }

    public filesUpload(config: KinveyServiceConfig, file: {}, metadata?: KinveyFileMetadata) {
        return null;
    }

    public getDataReload(key: string) {
        this.dataReload[key] = this.dataReload[key] || new Subject<any>();
        return this.dataReload[key];
    }

    public isAuthError(error: Error) {
        return false;
    }

    protected count(config: KinveyServiceConfig, state: CollectionState): Observable<number> {
        state = state || {};
        const collectionResource = this.getCollectionResource(config);
        const url = this.getAbsoluteUrl(config, { url: `${collectionResource}/_count` });

        return this.request(config, 'GET', url, {
            params: this.getRequestParams({ filter: state.filter }),
            observe: 'response'
        }).pipe(
            map(response => (response.body as any).count)
        );
    }

    protected request(
        config: KinveyServiceConfig,
        method: string,
        url: string,
        options: {
            body?: any;
            headers?:
            | HttpHeaders
            | {
                [header: string]: string | string[];
            };
            reportProgress?: boolean;
            observe: 'response';
            params?:
            | HttpParams
            | {
                [param: string]: string | string[];
            };
            responseType?: 'json';
            withCredentials?: boolean;
        }
    ): Observable<HttpResponse<Object>> {
        options.headers = options.headers || new HttpHeaders();

        if (options.headers instanceof HttpHeaders) {
            options.headers = options.headers.append(DATA_PROVIDER_HEADER, config.dataProviderName);
        } else {
            options.headers[DATA_PROVIDER_HEADER] = config.dataProviderName;
        }

        return this.http.request(method, url, options);
    }

    protected getAbsoluteUrl(config: KinveyServiceConfig, request: DataServiceRequest): string {
        const dataProvider = this.dataProviderService.get(config.dataProviderName);
        let serviceUri = dataProvider ? dataProvider.serviceUri : '';
        serviceUri = serviceUri.replace(/[/]$/, '');

        let resourceUrl = Object.keys(request.routeParams || {}).reduce((prev, current) => {
            const regEx = new RegExp(':' + current, 'gi');
            return prev.replace(regEx, request.routeParams[current]);
        }, request.url);

        if (!resourceUrl.startsWith('/')) {
            resourceUrl = '/' + resourceUrl;
        }

        return `${serviceUri}${resourceUrl}`;
    }

    protected getCollectionResource(config: KinveyServiceConfig): string {
        const dataProvider = this.dataProviderService.get(config.dataProviderName);
        return `appdata/${dataProvider.appKey}/${config.collection}`;
    }

    protected getRequestParams(state: State): { [param: string]: string | string[]; } {
        const params = {};

        if (typeof state.filter !== 'undefined') {
            params['query'] = this.buildQuery(state.filter);
        }

        if (typeof state.skip !== 'undefined') {
            params['skip'] = state.skip.toString();
        }

        if (typeof state.take !== 'undefined') {
            params['limit'] = state.take.toString();
        }

        if (typeof state.sort !== 'undefined') {
            const sortDef = {};

            state.sort.forEach(item => {
                sortDef[item.field] = item.dir && item.dir === 'desc' ? -1 : 1;
            });

            params['sort'] = JSON.stringify(sortDef);
        }

        return params;
    }

    protected buildQuery(filterDesc: CompositeFilterDescriptor): string {
        return JSON.stringify(this.buildCompositeFilter(filterDesc));
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
                    '$ne': filterDesc.value
                };
                break;

            case 'isnull':
                value = null;
                break;

            case 'isnotnull':
                value = {
                    '$ne': null
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
                    '$ne': ''
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
