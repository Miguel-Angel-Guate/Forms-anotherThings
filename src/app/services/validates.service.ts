import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatesService {
  constructor() {}
  noThisName(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase() === 'teletor') {
      return {
        notThisName: true,
      };
    }
    return null;
  }
}
