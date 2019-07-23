import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { HomeComponent } from "./home.component";
import { ApprovedRequestComponent } from "./approved-request/approved-request.component";
import { PendingRequestComponent } from "./pending-request/pending-request.component";
import { PreApprovedRequestComponent } from "./pre-approved-request/pre-approved-request.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [MaterialModule, CommonModule],
  exports: [
    HomeComponent,
    ApprovedRequestComponent,
    PendingRequestComponent,
    PreApprovedRequestComponent
  ],
  declarations: [
    HomeComponent,
    ApprovedRequestComponent,
    PendingRequestComponent,
    PreApprovedRequestComponent
  ]
})
export class HomeModule {}
