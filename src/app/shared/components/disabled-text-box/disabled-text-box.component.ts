///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { KsTextBoxBaseComponent } from '@src/app/shared/components/text-box.base.component';

@Component({
    selector: 'ks-disabled-text-box',
    templateUrl: './disabled-text-box.component.html',
})
export class KsDisabledTextBoxComponent extends KsTextBoxBaseComponent {
    @ViewChild('disabledInput') public disabledInput: ElementRef;

    public shouldValidateComponent(): boolean {
        return false;
    }

    protected createControl(): FormControl {
        const control: FormControl = new FormControl({ value: this.config.defaultValue, disabled: true }, this.getValidators());
        this.formGroup.addControl(this.id, control);
        this.viewFormArray.push(this.formGroup);

        return control;
    }
}
