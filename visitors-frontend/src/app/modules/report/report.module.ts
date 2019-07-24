import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ReportComponent } from './report.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VisitorProfileComponent } from './components/visitor-profile/visitor-profile.component';
import { VisitSummaryComponent } from './components/visit-summary/visit-summary.component';

@NgModule( {
  imports: [
    MaterialModule
  ],
  exports: [ ReportComponent ],
  declarations: [
    ReportComponent,
    VisitorComponent,
    VisitorProfileComponent,
    VisitSummaryComponent
  ],
  entryComponents: [VisitorComponent]
} )
export class ReportModule {

}
