import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactives-forms',
  templateUrl: './reactives-forms.component.html',
  styleUrls: ['./reactives-forms.component.css'],
})
export class ReactivesFormsComponent implements OnInit {
  // step1 Referencia for to the form
  reactiveForm: FormGroup;
  // step2 call the formBuilder  in the services
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

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

  //step3 create the formBuilder
  createForm() {
    this.reactiveForm = this.formBuilder.group({
      //in the array first go the valor, and then the validation(sincrono) and last valiation asyncrono
      name: [' ', [Validators.required, Validators.minLength(5)]],
      lName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    });
  }
  saveSubmit() {
    if (this.reactiveForm.invalid) {
      Object.values(this.reactiveForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    console.log(this.reactiveForm);
  }
}
