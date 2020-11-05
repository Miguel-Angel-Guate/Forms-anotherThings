import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ValidatesService {
  constructor() {}
  userExist(
    control: FormControl
  ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'stride') {
          resolve({ exist: true });
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
  noThisName(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase() === 'teletor') {
      return {
        notThisName: true,
      };
    }
    return null;
  }
  theSamePass(passOneName: string, passTwoName: string) {
    return (formGroup: FormGroup) => {
      const passOneControl = formGroup.controls[passOneName];
      const passTwoControl = formGroup.controls[passTwoName];
      if (passOneControl.value === passTwoControl.value) {
        passTwoControl.setErrors(null);
      } else {
        passTwoControl.setErrors({ noTheSame: true });
      }
    };
  }
}
