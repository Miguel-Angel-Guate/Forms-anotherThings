import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatesService } from 'src/app/services/validates.service';
@Component({
  selector: 'app-reactives-forms',
  templateUrl: './reactives-forms.component.html',
  styleUrls: ['./reactives-forms.component.css'],
})
export class ReactivesFormsComponent implements OnInit {
  // step1 Referencia for to the form
  reactiveForm: FormGroup;
  // step2 call the formBuilder  in the services
  constructor(
    private formBuilder: FormBuilder,
    private validate: ValidatesService
  ) {
    this.createForm();
    this.chargeDataForm();
  }

  ngOnInit(): void {}

  get skills() {
    return this.reactiveForm.get('skills') as FormArray;
  }
  get nameNoValid() {
    return (
      this.reactiveForm.get('name').invalid &&
      this.reactiveForm.get('name').touched
    );
  }
  get lNameNoValid() {
    return (
      this.reactiveForm.get('lName').invalid &&
      this.reactiveForm.get('lName').touched
    );
  }
  get emailNoValid() {
    return (
      this.reactiveForm.get('email').invalid &&
      this.reactiveForm.get('email').touched
    );
  }
  userNoValid() {
    return (
      this.reactiveForm.get('user').invalid &&
      this.reactiveForm.get('user').touched
    );
  }
  get distritNoValid() {
    return (
      this.reactiveForm.get('adress.distrit').invalid &&
      this.reactiveForm.get('adress.distrit').touched
    );
  }

  get cityNoValid() {
    return (
      this.reactiveForm.get('adress.city').invalid &&
      this.reactiveForm.get('adress.city').touched
    );
  }
  get passOneNo() {
    return (
      this.reactiveForm.get('passOne').invalid &&
      this.reactiveForm.get('passOne').touched
    );
  }
  get passTwoNo() {
    const passOne = this.reactiveForm.get('passOne').value;
    const passTwo = this.reactiveForm.get('passTwo').value;
    return passOne === passTwo ? false : true;
  }

  //step3 create the formBuilder
  createForm() {
    this.reactiveForm = this.formBuilder.group(
      {
        //in the array first go the valor, and then the validation(sincrono) and last valiation asyncrono
        name: [' ', [Validators.required, Validators.minLength(5)]],
        lName: ['', [Validators.required, this.validate.noThisName]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        user: ['', , this.validate.userExist],
        passOne: ['', Validators.required],
        passTwo: ['', Validators.required],
        adress: this.formBuilder.group({
          distrit: ['', Validators.required],
          city: ['', Validators.required],
        }),
        skills: this.formBuilder.array([]),
      },
      {
        validators: this.validate.theSamePass('passOne', 'passTwo'),
      }
    );
  }
  addSkills() {
    this.skills.push(this.formBuilder.control('', Validators.required));
  }
  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }
  chargeDataForm() {
    this.reactiveForm.reset({
      name: 'jhonsss',
      lName: 'ssssssssss',
      email: 'dkdakldld@yahoo.sd',
      passOne: '123',
      passTwo: '123',
      adress: {
        distrit: 'el cartucho',
        city: '',
      },
    });
    //add data in the inputs
    // ['hi1', 'hi2'].forEach((val) =>
    //   this.skills.push(this.formBuilder.control(val))
    // );
  }
  saveSubmit() {
    if (this.reactiveForm.invalid) {
      Object.values(this.reactiveForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(this.reactiveForm.controls).forEach((control) =>
            control.markAllAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
      return;
    }
    //post the inf for the save
    this.reactiveForm.reset({
      distrit: 'distrit 12 of selena',
    });
  }
}
