///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Observable, ConnectableObservable, BehaviorSubject, Subject, of } from 'rxjs';
import { first, publish, catchError } from 'rxjs/operators';

import { ModelDataResult } from '@src/app/core/data/model-data-result';
import { DataStateService } from '@src/app/core/data/state/data-state.service';

export abstract class BaseDataService<T, TConfig, TState> {
    public readonly dataState: DataStateService<TState>;

    public get dataChanges(): Observable<ModelDataResult<T> | T[] | T> {
        if (!this._dataChanges) {
            this._dataChanges = this.getDataChanges();
        }

        return this._dataChanges
    }

    public readonly errors = new BehaviorSubject<Error>(null);
    public readonly isLoading = new Subject<boolean>();

    private _dataChanges: Observable<ModelDataResult<T> | T[] | T>;

    constructor(protected config: TConfig, initialState?: TState) {
        this.dataState = new DataStateService<TState>(initialState);
    }

    public abstract refresh(): Promise<any>;

    protected abstract getDataChanges(): Observable<any>;

    protected toPromise(action: () => void) {
        const connectableObservable = this.dataChanges.pipe(publish()) as ConnectableObservable<any>;
        connectableObservable.connect();
        action();

        return connectableObservable.pipe(first()).toPromise();
    }

    protected handleError(error: Error) {
        this.isLoading.next(false);
        this.errors.next(error);
        console.error(error.stack || error.toString());
    }

    protected handleObservableError() {
        return catchError((error: Error) => {
            this.handleError(error);
            return of(null);
        });
    }

    protected handlePromiseError(error: Error) {
        this.handleError(error);
        throw error;
    }
}
