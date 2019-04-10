///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';
import { MaskedTextBoxComponent } from '@progress/kendo-angular-inputs';

@Component({
    selector: 'ks-masked-text-box',
    templateUrl: './masked-text-box.component.html',
})
export class KsMaskedTextBoxComponent extends KsInputBaseComponent {
    @ViewChild('maskedInput') public maskedInput: MaskedTextBoxComponent;

    set model(value: string) {
        super.setModel<string>(value);
    }

    @Input() get model(): string {
        return super.getModel<string>();
    }

    public valueChange(value: string): void {
        super.updateModel<string>(value);
    }

    public shouldValidateComponent(): boolean {
        return super.shouldValidateComponent() ||
            this.config.mask !== undefined;
    }

    protected getDefaultValidationMessages(): any {
        const messages: any = super.getDefaultValidationMessages();
        messages['patternError'] = `Please populate all symbols`;

        return messages;
    }
}
