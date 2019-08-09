/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * This service helps to store all application related details
 */


import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';


@Injectable( {
  providedIn: 'root'
} )

export class ContextService {
  user: any = null;

  constructor( private authService: AuthService ) {
    this.setUser()
  }

  setUser() {
    let token = window.sessionStorage.getItem( 'token' ) ? window.sessionStorage.getItem( 'token' ) : null;
    console.log( `In Context - ${ token }` )
    if ( token ) {
      // this.authService.getUserDetailsByToken( token ).subscribe( ( data ) => {
      //   this.user = data;
      // } )
    }
  }

  get hasUser(): boolean {
    return !!this.user
  }

}