import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { VisitorFormComponent } from './visitor-form.component';

@NgModule( {
  declarations: [ VisitorFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ VisitorFormComponent ]
} )
export class VisitorsModule { }
