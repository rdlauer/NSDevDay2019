///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { Subscription } from 'rxjs';

import { EntityDataService } from '@src/app/core/data/entity-data.service';

@Component({
    selector: 'ks-form',
    templateUrl: './form.component.html',
})
export class KSFormComponent implements OnInit, OnDestroy {
    @ViewChild('form') form: ElementRef;

    @Input() dataService: EntityDataService<any>;
    @Input() formGroup: FormGroup;
    @Input() columns = '';
    @Input() rows = '';

    asyncInputs: Promise<void>[] = [];
    dataChanges: Subscription;
    item: any;
    isSubmitting = false;

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() {
        if (this.isRootForm) {
            this.createFormGroup(this.form.nativeElement, this.formGroup);
        }

        if (!this.dataService) {
            return;
        }

        this.dataChanges = this.dataService.dataChanges.subscribe(item => {
            if (item) {
                this.item = item;
                this.formGroup.patchValue(item);
            }
        });
    }

    ngOnDestroy() {
        if (this.dataChanges) {
            this.dataChanges.unsubscribe();
        }
    }

    createFormGroup(formElement, formGroup = new FormGroup({})): FormGroup {
        formElement.eachChild(x => {
            if (x.typeName === 'ProxyViewContainer' && x.formGroupName) {
                formGroup.addControl(x.formGroupName, this.createFormGroup(x.getChildAt(0)));
            }

            if (x.formControlName) {
                const formControlValidators = this.getValidators(x.formControlValidators ? x.formControlValidators.split(' ') : []);
                formGroup.addControl(x.formControlName, new FormControl(null, formControlValidators));
            }
        });

        return formGroup;
    }

    get isValid() {
        return this.formGroup.valid;
    }

    get isRootForm(): boolean {
        return !!this.formGroup;
    }

    onSubmit() {
        this.isSubmitting = true;
        Promise.all(this.asyncInputs)
            .then(() => {
                if (!this.isValid) {
                    throw new Error("The form is not valid.")
                }
            })
            .then(() => this.dataService.save({ ...this.item, ...this.formGroup.value }))
            .then(() => this.routerExtensions.back())
            .catch((err) => {
                this.isSubmitting = false;
                alert(err && err.message || 'An error has occurred.');
            });
    }

    onCancel() {
        this.routerExtensions.back();
    }

    onRegisterAsyncInput(asyncInput: Promise<void>) {
        this.asyncInputs.push(asyncInput);
    }

    private getValidators(validators: string[]) {
        const formValidators = [];

        validators.forEach(v => {
            const validator = this.getValidator(v)
            if (validator) {
                formValidators.push(validator);
            }
        });

        return formValidators;
    }

    private getValidator(validatorName: string) {
        switch (validatorName) {
            case 'required':
                return Validators.required;
        }
    }
}
