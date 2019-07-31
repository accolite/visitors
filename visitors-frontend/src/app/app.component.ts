import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { accoliteLocation } from "../app/helpers/static-data";
import { BlockScrollStrategy } from "@angular/cdk/overlay";
import { Subject, BehaviorSubject } from "rxjs";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // activatedRoute: ActivatedRoute;
  active: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {
    if (window.location.href.indexOf("?loc") > -1) {
      this.val = window.location.href.split("=")[1];
    } else {
      this.val = "Bangalore";
      this.selectedValue(this.val);
    }
  }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe( params => {
    //   console.log( params.get( 'login' ) )
    // } )

    this.auth.subject$.subscribe(data => (this.active = data));
    console.log(window.location.href);
    if (window.location.href.indexOf("login") > -1) {
      console.log("login route");
      this.auth.subject$.next(false);
    } else {
      this.auth.subject$.next(true);
    }
    // console.log( this.router.url );
    // if ( this.router.url.indexOf( 'login' ) > -1 ) {
    //   this.active = 0;
    //   console.log( "Active " + this.active )
    // }
  }
  title = "visitor-frontend";
  location: any = accoliteLocation;
  val: string = "Bangalore";
  // searchUrl: string = "?"
  selectedValue(selectedval: string) {
    this.val = selectedval;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { loc: this.val },
      queryParamsHandling: "merge"
    });
  }
}
