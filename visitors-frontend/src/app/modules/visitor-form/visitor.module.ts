import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";

import { VisitorFormComponent } from "./visitor-form.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [VisitorFormComponent],
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [VisitorFormComponent]
})
export class VisitortModule {}
