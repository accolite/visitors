import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ReportComponent } from './report.component';

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
