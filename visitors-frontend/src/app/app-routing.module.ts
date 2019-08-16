import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ReportComponent } from './modules/report/report.component';
import { VisitorComponent } from './modules/visitor-form/visitor-home/visitor-home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ContextResolver } from './services/context-resolver.service';

const routes: Routes = [
  {
    path: '', component: MainComponent, canActivate: [ AuthGuardService ],
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full', canActivate: [ AuthGuardService ] },
      { path: 'report', component: ReportComponent, canActivate: [ AuthGuardService ], resolve:{contextData:ContextResolver} },
      { path: 'visitor', component: VisitorComponent, canActivate: [ AuthGuardService ], resolve:{contextData:ContextResolver} }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
