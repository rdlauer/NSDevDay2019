///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { KsNumericInputBaseComponent } from '@src/app/shared/components/numeric-input.base.component';
import { SliderComponent } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'ks-slider',
    templateUrl: './slider.component.html',
})
export class KsSliderComponent extends KsNumericInputBaseComponent {
    @ViewChild('slider') public slider: SliderComponent;

    public shouldValidateComponent(): boolean {
        return false;
    }
}
