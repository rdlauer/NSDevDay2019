///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
    selector: 'ks-data-form',
    templateUrl: './data-form.component.html',
})
export class KsDataFormComponent {
    private _model: any;

    @Input() public viewFormArray: FormArray;

    @Input() set model(value: any) {
        this._model = value;
    }
}
