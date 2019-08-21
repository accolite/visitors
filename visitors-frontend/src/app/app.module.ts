import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./modules/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReportModule } from "./modules/report/report.module";
import { VisitorsModule } from "./modules/visitor-form/visitors.module";
import { HomeModule } from "./modules/home/home.module";
import { DialogOverviewComponent } from "./modules/home/dialog-overview/dialog-overview.component";
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { RestInterceptor } from './services/base/rest.interceptor';
import { WebcamModule } from 'ngx-webcam';



@NgModule( {
  declarations: [ AppComponent, LoginComponent, MainComponent, NoPageFoundComponent ],
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
    WebcamModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: RestInterceptor,
    multi: true
  } ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DialogOverviewComponent ]
} )
export class AppModule { }
