///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';

import { Observable, Subject, merge, of } from 'rxjs';
import { flatMap, last, map, pairwise, scan, shareReplay, tap, withLatestFrom } from 'rxjs/operators';

import { BaseDataService } from '@src/app/core/data/base-data.service';
import { KinveyService } from '@src/app/core/data/kinvey.service';
import { KinveyFileMetadata } from '@src/app/core/data/kinvey-file-metadata';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';

class InternalState {
    public collectionState: CollectionState;
    public loadMorePage: number;

    constructor(collectionState: CollectionState, loadMorePage: number = 0) {
        this.collectionState = collectionState;
        this.loadMorePage = loadMorePage;
    }
}

export class CollectionDataService<T> extends BaseDataService<T, KinveyServiceConfig, CollectionState> {
    protected loadOnDemand: Subject<any>;

    private coreService: KinveyService;

    constructor(protected injector: Injector, config: KinveyServiceConfig, initialState?: CollectionState) {
        super(config, initialState);
        this.coreService = this.injector.get(KinveyService);
    }

    public refresh(): Promise<any> {
        return this.toPromise(() => this.getDataReload().next());
    }

    public loadMore(): Promise<any> {
        return this.toPromise(() => {
            if (this.loadOnDemand) {
                this.loadOnDemand.next();
            }
        });
    }

    public save(item: T): Promise<any> {
        return this.coreService.save(this.config, item)
            .then(() => this.refresh())
            .catch(error => this.handlePromiseError(error));
    }

    public remove(item: T): Promise<any> {
        return this.coreService.remove(this.config, item)
            .then(() => this.refresh())
            .catch(error => this.handlePromiseError(error));
    }

    public createModel(): T {
        return this.config.createModel();
    }

    public filesUpload(file: {}, metadata?: KinveyFileMetadata) {
        return this.coreService.filesUpload(this.config, file, metadata);
    }

    protected getDataChanges(): Observable<ModelDataResult<T> | T[]> {
        if (this.config.loadOnDemand) {
            this.loadOnDemand = new Subject<any>();

            return this.getStateObservableWithLoadMore().pipe(
                flatMap(state => this.getQueryObservableWithLoadMore(state).pipe(
                    this.handleObservableError(),
                    last(value => !!value),
                    map(items => ({ items, state }))
                )),
                scan((oldItems, value: { items: any[], state: InternalState }) => {
                    if (value.state.loadMorePage) {
                        const uniqueIds = new Set(oldItems.map(item => item._id));
                        return oldItems.concat(value.items.filter(item => !uniqueIds.has(item._id)));
                    }

                    return value.items;
                }, []),
                map(items => this.mapData(items)),
                shareReplay(1)
            );
        }

        return this.getStateObservable().pipe(
            flatMap(state => this.getQueryObservable(state).pipe(
                this.handleObservableError(),
                last(value => !!value),
            )),
            shareReplay(1)
        );
    }

    protected getDataReload(): Subject<any> {
        return this.coreService.getDataReload(this.config.collection);
    }

    protected getStateObservable(): Observable<InternalState> {
        return merge(
            this.getDataReload().pipe(
                withLatestFrom(this.dataState.changes),
                map(([_, state]) => new InternalState(state))
            ),
            this.dataState.changes.pipe(
                map(state => new InternalState(state))
            )
        );
    }

    protected getStateObservableWithLoadMore(): Observable<InternalState> {
        return merge(
            of(new InternalState({})),
            this.getDataReload().pipe(
                withLatestFrom(this.dataState.changes),
                map(([_, state]) => new InternalState(state))
            ),
            this.loadOnDemand.pipe(
                withLatestFrom(this.dataState.changes),
                map(([_, state]) => new InternalState(state, 1))
            ),
            this.dataState.changes.pipe(
                map(state => new InternalState(state))
            )
        ).pipe(
            pairwise(),
            map(([oldState, newState]) => {
                if (newState.loadMorePage) {
                    newState.loadMorePage += oldState.loadMorePage || 0;
                }

                return newState;
            }),
        );
    }

    protected getQueryObservable(state: InternalState): Observable<ModelDataResult<T>> {
        this.isLoading.next(true);

        return this.coreService.findWithCount(this.config, state.collectionState)
            .pipe(
                map(({ data, total }) => ({
                    data: this.mapData(data),
                    total
                })),
                tap(() => this.isLoading.next(false))
            );
    }

    protected getQueryObservableWithLoadMore(state: InternalState): Observable<T[]> {
        this.isLoading.next(true);
        let queryState = state.collectionState;

        if (state.loadMorePage) {
            queryState = this.dataState.cloneState(queryState);
            queryState.skip += state.loadMorePage * queryState.take;
        }

        return this.coreService.find(this.config, queryState).pipe(
            map(data => this.mapData(data)),
            tap(() => this.isLoading.next(false))
        );
    }

    protected mapData(data: any[]): T[] {
        if (this.config.mapData) {
            return data.map(item => this.config.mapData(item));
        }

        return data;
    }

    protected handleError(error: Error) {
        if (this.coreService.isAuthError(error)) {
            //   this.navigationService.navigate(['login'], { clearHistory: true });
            // TODO: use Authentication Service instead
            return;
        }

        super.handleError(error);
    }
}
