///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';

import { Observable, Subject, merge } from 'rxjs';
import { flatMap, filter, last, map, shareReplay, withLatestFrom } from 'rxjs/operators';

import { BaseDataService } from '@src/app/core/data/base-data.service';
import { KinveyService } from '@src/app/core/data/kinvey.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { EntityState } from '@src/app/core/data/state/entity-state.interface';

export class EntityDataService<T> extends BaseDataService<T, KinveyServiceConfig, EntityState> {
    private coreService: KinveyService;

    constructor(protected injector: Injector, config: KinveyServiceConfig, initialState?: EntityState) {
        super(config, initialState);
        this.coreService = this.injector.get(KinveyService);
    }

    public refresh(): Promise<any> {
        return this.toPromise(() => this.getDataReload().next());
    }

    public save(item: T) {
        return this.coreService.save(this.config, item)
            .then((newItem: any) => {
                return this.toPromise(() => {
                    this.getDataReload().next();
                    const state = this.dataState.getCurrent();

                    // TODO: This would not work in offline mode
                    if (!state.id && newItem._id) {
                        state.id = newItem._id;
                        this.dataState.update(state);
                    }
                });
            })
            .catch(error => this.handlePromiseError(error));
    }

    public remove(item: T) {
        return this.coreService.remove(this.config, item)
            .then(() => this.refresh())
            .catch(error => this.handlePromiseError(error));
    }

    protected getDataChanges(): Observable<T> {
        const entityObservable = state => this.coreService.findById(this.config, state.id).pipe(
            this.handleObservableError(),
            last(value => !!value),
            map(item => this.mapData(item))
        );

        return merge(
            this.getDataReload().pipe(
                withLatestFrom(this.dataState.changes),
                map(([_, state]) => state)
            ),
            this.dataState.changes
        ).pipe(
            filter(state => !!state.id),
            flatMap(state => entityObservable(state)),
            shareReplay(1)
        );
    }

    protected getDataReload(): Subject<any> {
        return this.coreService.getDataReload(this.config.collection);
    }

    protected handleError(error: Error) {
        if (this.coreService.isAuthError(error)) {
            //   this.navigationService.navigate(['login'], { clearHistory: true });
            // TODO: use Authentication Service instead
            return;
        }

        super.handleError(error);
    }

    protected mapData(item: any): T {
        if (this.config.mapData) {
            return this.config.mapData(item);
        }

        return item;
    }
}
