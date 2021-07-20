import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AgeValidator {

    static ageRange(c: AbstractControl): ValidationErrors | null{
        let age = c.value;
        if (age && (isNaN(age) || age < 20 || age > 120)) {
            return { 'range': true, min: 20, max: 120 };
        }
        return null;
    }
}
