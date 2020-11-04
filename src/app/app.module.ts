import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactivesFormsComponent } from './pages/reactives-forms/reactives-forms.component';
//prevent refresh when i try push the submit of forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TemplateComponent, ReactivesFormsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
