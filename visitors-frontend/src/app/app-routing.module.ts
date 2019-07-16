import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './modules/report/report.component';
import { VisitorFormComponent } from './components/ui-components/visitor-form/visitor-form.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: VisitorFormComponent },
  { path: 'visitor', pathMatch: 'full', component: VisitorFormComponent },
  { path: 'report', pathMatch: 'full', component: ReportComponent },
  { path: '**', pathMatch: 'full', component: VisitorFormComponent }

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
