import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';

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
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.countryService.getContries().subscribe((countries) => {
      console.log('countries.....', countries);
    });
  }
  saveSubmit(templateForm: NgForm) {
    console.log('Res', templateForm);
    console.log('the data i wrote', templateForm.value);
    if (templateForm.invalid) {
      Object.values(templateForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    console.log('i waiting.....', templateForm.value);
  }
}
