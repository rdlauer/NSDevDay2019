///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild } from '@angular/core';
import { KsDateInputBaseComponent } from '@src/app/shared/components/date-input.base.component';
import { DatePickerComponent, TimePickerComponent } from '@progress/kendo-angular-dateinputs';

@Component({
    selector: 'ks-date-time-picker',
    templateUrl: './date-time-picker.component.html',
})
export class KsDateTimePickerComponent extends KsDateInputBaseComponent {
    @ViewChild(DatePickerComponent) public datePicker: DatePickerComponent;
    @ViewChild(TimePickerComponent) public timePicker: TimePickerComponent;
}
