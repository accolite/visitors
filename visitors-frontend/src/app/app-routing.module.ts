import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './modules/report/report.component';
import { VisitorComponent } from './modules/visitor-form/visitor-home/visitor-home.component';
import { loginComponent } from '../app/components/login.component'

const routes: Routes = [

  { path: '', pathMatch: 'full', component: VisitorComponent },
  // { path: 'login', pathMatch: 'full', component: loginComponent },
  { path: 'visitor', pathMatch: 'full', component: VisitorComponent },
  { path: 'report', pathMatch: 'full', component: ReportComponent },

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
