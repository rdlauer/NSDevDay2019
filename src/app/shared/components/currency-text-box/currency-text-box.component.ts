///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild } from '@angular/core';
import { KsNumericInputBaseComponent } from '@src/app/shared/components/numeric-input.base.component';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'ks-currency-text-box',
    templateUrl: './currency-text-box.component.html',
})
export class KsCurrencyTextBoxComponent extends KsNumericInputBaseComponent {
    @ViewChild('currencyInput') public currencyInput: NumericTextBoxComponent;
}
