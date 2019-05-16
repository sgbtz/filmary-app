import { Directive } from "@angular/core";
import { Validator, ValidatorFn, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

// City must match cities list
export const confirmEmailValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const confirmEmail = control.get('confirmEmail');

  return email.value && confirmEmail.value && email.value !== confirmEmail.value ?  { 'emailConfirmation': true } : null;
};
