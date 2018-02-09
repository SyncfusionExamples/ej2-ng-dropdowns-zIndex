import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component'
import { AutoCompleteModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-ng-dropdowns';


/**
 * Module
 */

@NgModule({
  imports: [BrowserModule, FormsModule, AutoCompleteModule, DropDownListModule, ReactiveFormsModule,
    MultiSelectModule, JsonpModule, NgbModule.forRoot()],
  declarations: [AppComponent, CustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }