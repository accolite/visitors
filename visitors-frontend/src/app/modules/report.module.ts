import { NgModule } from '@angular/core';
import { ReportComponent } from '../components/report/report.component';
import { MaterialModule } from './material.module';

@NgModule( {
  imports: [
    MaterialModule
  ],
  exports: [],
  declarations: [
    ReportComponent
  ],
} )
export class ReportModule {

}
