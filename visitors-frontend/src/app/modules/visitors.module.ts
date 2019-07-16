import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { VisitorFormComponent } from '../components/visitor-form/visitor-form.component';

const routes = [
];

@NgModule( {
  declarations: [ VisitorFormComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild( routes )
  ],
  exports: [ VisitorFormComponent, RouterModule ]
} )
export class VisitorsModule { }
