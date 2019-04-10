///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
    selector: 'ks-check-box',
    templateUrl: './check-box.component.html',
})
export class KsCheckBoxComponent extends KsInputBaseComponent {
    @ViewChild('checkBox') public checkBox: ElementRef;

    @Output() public modelChange: EventEmitter<boolean> = new EventEmitter();

    set model(value: boolean) {
        super.setModel<boolean>(value);
    }

    @Input() get model(): boolean {
        return super.getModel<boolean>();
    }

    public changeHandler(event: any): void {
        super.updateModel<boolean>(event.currentTarget.checked);
    }

    protected createControl(): FormControl {
        const control: FormControl = new FormControl({
            value: this.config.value,
            disabled: this.config.disabled
        }, this.getValidators());
        this.formGroup.addControl(this.id, control);
        this.viewFormArray.push(this.formGroup);
        return control;
    }
}
