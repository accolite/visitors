import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { VisitorFormComponent } from "./visitor-form.component";
import { VisitorComponent } from "./visitor-home/visitor-home.component";
import { HomeModule } from "../home/home.module";
import { VisitorSearchOrCreateComponent } from './visitor-search-or-create/visitor-search-or-create.component';

@NgModule( {
  declarations: [ VisitorFormComponent, VisitorComponent, VisitorSearchOrCreateComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ VisitorFormComponent, VisitorComponent, VisitorSearchOrCreateComponent ]
} )
export class VisitorsModule { }
