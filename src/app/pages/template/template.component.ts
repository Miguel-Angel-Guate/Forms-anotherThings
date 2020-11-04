import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  userData = {
    name: '',
    lastName: '',
    email: '',
  };
  constructor() {}

  ngOnInit(): void {}
  saveSubmit(templateForm: NgForm) {
    console.log('Res', templateForm);
    console.log('the data i wrote', templateForm.value);
  }
}
