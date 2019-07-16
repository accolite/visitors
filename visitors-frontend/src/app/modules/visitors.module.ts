import { NgModule, Component } from "@angular/core";
import { VisitorFormComponent } from "../components/ui-components/visitor-form/visitor-form.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "visitor",
    component: VisitorFormComponent
  }
];

@NgModule({
  declarations: [VisitorFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [VisitorFormComponent, RouterModule]
})
export class VisitorsModule {}
