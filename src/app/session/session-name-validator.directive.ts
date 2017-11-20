import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

// NOT USED
@Directive({
    selector: '[validateSessionName]',
    providers: [{ 
        provide: SessionNameValidator, 
        useExisting: NG_VALIDATORS,
        multi: true 
    }]
})
export class SessionNameValidator implements Validator{
    validate(formGroup: FormGroup): {[key: string]: any} {
        let sessionNameControl = formGroup.controls['name'];
        if (sessionNameControl && sessionNameControl.value) {
            return null;
        }
        return { validateSessionName: false };
    }
}