///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { KsTextBoxBaseComponent } from '@src/app/shared/components/text-box.base.component';
import { CustomValidators } from '@src/app/shared/components/custom-validators';

@Component({
    selector: 'ks-url-text-box',
    templateUrl: './url-text-box.component.html',
})
export class KsUrlTextBoxComponent extends KsTextBoxBaseComponent {
    @ViewChild('urlInput') public urlInput: ElementRef;

    public shouldValidateComponent(): boolean {
        return true;
    }

    protected getValidators(): Array<any> {
        const validators: Array<any> = super.getValidators();
        validators.push(CustomValidators.urlFormat);
        return validators;
    }

    protected getDefaultValidationMessages(): any {
        const messages: any = super.getDefaultValidationMessages();
        messages['invalidUrl'] = `Entered url is not valid`;
        return messages;
    }
}
