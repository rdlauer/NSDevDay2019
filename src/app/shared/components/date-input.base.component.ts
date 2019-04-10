///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Input, EventEmitter, Output } from '@angular/core';
import { KsInputBaseComponent } from '@src/app/shared/components/input.base.component';

export abstract class KsDateInputBaseComponent extends KsInputBaseComponent  {
    @Output() public modelChange: EventEmitter<Date> = new EventEmitter();

    set model(value: Date) {
        super.setModel<Date>(value);
    }

    @Input() get model(): Date {
        return super.getModel<Date>();
    }

    public valueChange(value: Date): void {
        super.setModel<Date>(value);
        super.setErrorMessage();
    }

    public shouldValidateComponent(): boolean {
        return super.shouldValidateComponent() ||
            this.config.min !== undefined ||
            this.config.max !== undefined;
    }

    protected getDefaultValidationMessages(): any {
        const messages: any = super.getDefaultValidationMessages();
        messages['maxError'] = `Please enter a value less than or equal to ${this.config.max}.`;
        messages['minError'] = `Please enter a value greater than or equal to ${this.config.min}.`;

        return messages;
    }
}
