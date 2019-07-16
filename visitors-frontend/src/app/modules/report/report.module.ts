import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [];

@NgModule( {
  imports: [
    RouterModule.forChild( routes ),
    MaterialModule
  ],
  exports: [],
  declarations: [
    ReportComponent
  ],
} )
export class ReportModule {

}
