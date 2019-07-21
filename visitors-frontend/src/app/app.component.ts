import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { accoliteLocation } from '../app/helpers/static-data'

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )


export class AppComponent {
  activatedRoute: ActivatedRoute;

  constructor( private router: Router
  ) {

  }
  title = 'visitor-frontend';
  location: any = accoliteLocation;
  val: string;
  // searchUrl: string = "?"
  selectedValue( selectedval: string ) {
    this.val = selectedval;
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { loc: this.val },
        queryParamsHandling: 'merge'
      } )
  }
}
