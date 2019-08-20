import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { accoliteLocation } from 'src/app/helpers/static-data';
import { ContextService } from 'src/app/services/base/context.service';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
} )
export class MainComponent {
  active: any;
  title = 'visitor-frontend';
  location: string[] = accoliteLocation;
  queryLocation: string;
  showToggle: boolean = false;
  showNotification: boolean = false;
  accLocation: any;

  constructor( private router: Router, private activatedRoute: ActivatedRoute, public contextService: ContextService ) {
    this.activatedRoute.queryParams.subscribe( ( data ) => {
      this.queryLocation = data.loc;
      this.accLocation = this.queryLocation ? this.queryLocation.split( ',' ) : [ 'Bangalore' ]
    } )
  }

  ngOnInit() {
    if ( window.sessionStorage.getItem( 'token' ) ) {
      this.router.navigateByUrl( `/report?loc=${ this.queryLocation ? this.queryLocation : 'Bangalore' }` )
    } else {
      this.router.navigateByUrl( '/login' )
    }
  }

}