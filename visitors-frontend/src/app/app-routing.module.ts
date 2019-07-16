import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './components/ui-components/visitor/visitor.component';
import { ReportComponent } from './components/ui-components/report/report.component';


const routes: Routes = [
  { path: 'visitor', component: VisitorComponent, data: { title: 'Visitor Component' } },
  { path: 'report', component: ReportComponent, data: { title: 'Report Component' } },
  { path: '**', component: VisitorComponent, data: { title: 'Visitor Component' } }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
