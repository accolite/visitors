/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Basic authentication rule for all routers
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, RouterModule } from '@angular/router';
import { ContextService } from './base/context.service';
import { AuthService } from './auth.service';

@Injectable( {
  providedIn: 'root'
} )
export class AuthGuardService implements CanActivate {

  constructor( private router: RouterModule, private authService: AuthService, private contextService: ContextService ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let token: string = route.queryParams.token ? route.queryParams.token : window.sessionStorage.getItem( 'token' );
    let user = this.contextService.user ? this.contextService.user : null;

    if ( !( route.queryParams.token && window.sessionStorage.getItem( 'token' ) ) ) {
      window.sessionStorage.setItem( 'token', token );
    }

    // if ( !user ) {
    //   this.contextService.setUser()
    // }

    // return !!token && this.contextService.user;
    return true;

  }

}
