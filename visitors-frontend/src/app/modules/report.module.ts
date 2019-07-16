import { NgModule } from '@angular/core';
import { ReportComponent } from '../components/report/report.component';
import { MaterialModule } from './material.module';

@NgModule( {
  imports: [
    MaterialModule
  ],
  exports: [ ReportComponent ],
  declarations: [
    ReportComponent
  ],
} )
export class ReportModule {

}
