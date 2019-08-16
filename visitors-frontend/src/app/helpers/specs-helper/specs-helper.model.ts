import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { NoPageFoundComponent } from 'src/app/components/no-page-found/no-page-found.component';
import { VisitorsModule } from 'src/app/modules/visitor-form/visitors.module';
import { ReportModule } from 'src/app/modules/report/report.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { RestInterceptor } from 'src/app/services/base/rest.interceptor';

export abstract class SpecsHelper{
  get moduleDefinition(){
      return TestBed.configureTestingModule({
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
          HttpClientModule,
          HomeModule
        ],
        providers: [ {
          provide: HTTP_INTERCEPTORS,
          useClass: RestInterceptor,
          multi: true
        } ]
    })
  }
}