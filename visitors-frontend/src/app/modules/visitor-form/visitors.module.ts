import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { VisitorFormComponent } from "./visitor-form.component";
import { VisitorComponent } from "./visitor-home/visitor-home.component";
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [VisitorFormComponent, VisitorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [VisitorFormComponent, VisitorComponent]
})
export class VisitorsModule {}
