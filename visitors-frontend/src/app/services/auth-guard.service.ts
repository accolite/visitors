/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Basic authentication rule for all routers
 */

import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, RouterModule, Router } from '@angular/router';
import { ContextService } from './base/context.service';
import { AuthService } from './auth.service';

@Injectable( {
  providedIn: 'root'
} )
export class AuthGuardService implements CanActivate {

  constructor( private router: Router, private authService: AuthService, private contextService: ContextService, private zone: NgZone ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let token: string = route.queryParams.token ? route.queryParams.token : window.sessionStorage.getItem( 'token' ) ? window.sessionStorage.getItem( 'token' ) : null;

    if ( token == 'null' || token ) {
      window.sessionStorage.setItem( 'token', token )
    }
    let condition = !!token || this.contextService.hasUser;
    if ( !condition ) {
      this.router.navigateByUrl( 'login' );
    }
    return condition;
    // return true;
  }

}
