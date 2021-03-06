///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'ks-boolean-radio-button-list',
    templateUrl: './boolean-radio-button-list.component.html',
})
export class KsBooleanRadioButtonListComponent extends KsInputBaseComponent {
    @ViewChild('trueRadioButton') public trueRadioButton: ElementRef;
    @ViewChild('falseRadioButton') public falseRadioButton: ElementRef;

    @Output() public modelChange: EventEmitter<boolean> = new EventEmitter();

    set model(value: boolean) {
        super.setModel<boolean>(value);
    }

    @Input() get model(): boolean {
        return super.getModel<boolean>();
    }

    public changeHandler(event: any): void {
        const fg: FormGroup = <FormGroup>this.viewFormArray.controls.find(c => (<FormGroup>c).controls[this.id] !== undefined);
        const { value } = fg.controls[this.id];
        super.updateModel<boolean>(value);
    }

    public shouldValidateComponent(): boolean {
        return false;
    }

    public getFirstInputId(): string {
        return `${this.id}_1`;
    }

    public getSecondInputId(): string {
        return `${this.id}_2`;
    }
}
