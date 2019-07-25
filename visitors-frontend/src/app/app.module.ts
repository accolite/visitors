import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./modules/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReportModule } from "./modules/report/report.module";
import { VisitorsModule } from "./modules/visitor-form/visitors.module";
import { HomeModule } from "./modules/home/home.module";
import { DialogOverviewComponent } from "./modules/home/dialog-overview/dialog-overview.component";
import { loginComponent } from './components/login.component';


@NgModule( {
  declarations: [ AppComponent, loginComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    VisitorsModule,
    ReportModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewComponent]
})
export class AppModule {}
