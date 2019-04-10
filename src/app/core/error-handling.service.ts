///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injectable } from '@angular/core';

import { Observable, Subject, merge } from 'rxjs';

import { Notification } from '@src/app/core/notification/notification';
import { NotificationService } from '@src/app/core/notification/notification.service';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingService {
    protected errors = new Subject<Observable<Error>>();

    constructor(protected notificationService: NotificationService) {
        merge(this.errors)
            .pipe(
                flatMap(errors => errors)
            )
            .subscribe(error => {
                if (error) {
                    this.notificationService.notify(this.createErrorNotification(error));
                }
            });
    }

    public subscribe(errors: Observable<Error>) {
        this.errors.next(errors);
    }

    protected createErrorNotification(err: any) {
        const message = (err.error && (err.error.message || err.error.error)) || err.message;
        return new Notification(`<ul><li>${message}<li></ul>`, 'error', 10000);
    }
}