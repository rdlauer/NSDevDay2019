///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild } from '@angular/core';
import { KsDateInputBaseComponent } from '@src/app/shared/components/date-input.base.component';
import { TimePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
    selector: 'ks-time-picker',
    templateUrl: './time-picker.component.html',
})
export class KsTimePickerComponent extends KsDateInputBaseComponent {
    @ViewChild(TimePickerComponent) public timePicker: TimePickerComponent;
}
