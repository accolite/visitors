import { NgModule } from "@angular/core";
import { MaterialModule } from "../material.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [MaterialModule],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule {}
