import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { accoliteLocation } from 'src/app/helpers/static-data';
import { ArrayUtil } from 'src/app/helpers/array.util';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
} )
export class MainComponent {
  active: any;
  title = 'visitor-frontend';
  location: string[] = accoliteLocation;
  val: string[] = [ 'Bangalore' ];
  showToggle: boolean = false;
  showNotification: boolean = false;
  accLocation: any;

  constructor( private router: Router, private activatedRoute: ActivatedRoute,
    private auth: AuthService ) {
    this.accLocation = this.val
    if ( window.location.href.indexOf( '?loc' ) > -1 ) {
      let value: string = window.location.href.split( "=" )[ 1 ];
      this.accLocation = this.val = value.split( ',' );
    } else {
      this.val[ 0 ] = 'Bangalore';
      this.selectedValue( [ this.val[ 0 ] ] )
    }
  }

  selectedValue( selectedval: any ) {
    this.router.navigate( [],
      ArrayUtil.isNotEmpty( selectedval ) ? {
        relativeTo: this.activatedRoute,
        queryParams: { loc: selectedval.toString() },
        queryParamsHandling: 'merge',

      } : {} )
  }

}