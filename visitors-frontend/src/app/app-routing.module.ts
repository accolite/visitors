import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ReportComponent } from './modules/report/report.component';
import { VisitorComponent } from './modules/visitor-form/visitor-home/visitor-home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full' },
      { path: 'report', component: ReportComponent, canActivate: [AuthGuardService] },
      { path: 'visitor', component: VisitorComponent, canActivate: [AuthGuardService] }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoPageFoundComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
