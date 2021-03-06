///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, ContentChild, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ks-date-time-picker',
    templateUrl: './date-time-picker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => KSDateTimePickerComponent),
            multi: true
        }
    ]
})
export class KSDateTimePickerComponent implements ControlValueAccessor, OnInit {
    @Input()
    set date(value) {
        this._date = value;
        this.updatePicker(this._date);
    }

    @ContentChild('datePicker')
    protected datePicker;
    @ContentChild('timePicker')
    protected timePicker;

    private value: Date;
    private _onChange = (_: any) => { };
    private _onTouched = () => { };
    private _date = new Date().toString();

    public ngOnInit(): void {
        this.updatePicker(this._date);
    }

    writeValue(obj: any): void {
        this.updatePicker(obj);
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    onDateChange() {
        const date = this.datePicker.nativeElement.date;
        if (!date) {
            return;
        }

        this.value.setFullYear(date.getFullYear());
        this.value.setMonth(date.getMonth());
        this.value.setDate(date.getDate());

        this._onChange(this.value);
    }

    onTimeChange() {
        const time = this.timePicker.nativeElement.time;
        if (!time) {
            return;
        }

        this.value.setHours(time.getHours());
        this.value.setMinutes(time.getMinutes());
        this.value.setSeconds(time.getSeconds());

        this._onChange(this.value);
    }

    private updatePicker(value) {
        this.value = this.tryParseDateOrDefault(value);
        this.datePicker.nativeElement.date = this.value;
        this.timePicker.nativeElement.time = this.value;
    }

    private tryParseDateOrDefault(date: string) {
        const timeStamp = Date.parse(date);
        if (!isNaN(timeStamp)) {
            return new Date(timeStamp);
        }

        console.log(`The date cannot be created from the format: ${date}`);
        return new Date();
    }
}
