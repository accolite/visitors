import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VisitorFormComponent } from "./modules/visitor-form/visitor-form.component";
import { ReportComponent } from "./modules/report/report.component";
import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: VisitorFormComponent },
  { path: "home", pathMatch: "full", component: HomeComponent },
  { path: "visitor", pathMatch: "full", component: VisitorFormComponent },
  { path: "report", pathMatch: "full", component: ReportComponent },
  { path: "**", pathMatch: "full", component: VisitorFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
