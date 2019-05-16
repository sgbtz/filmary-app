import { Directive } from "@angular/core";
import { Validator, ValidatorFn, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

// City must match cities list
export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  return password.value && confirmPassword.value && password.value !== confirmPassword.value ?  { 'passwordConfirmation': true } : null;
};
