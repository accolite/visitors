/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * This service helps to store all application related details
 */


import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/helpers/models/user.model';


@Injectable( {
  providedIn: 'root'
} )

export class ContextService {
  user: User;

  constructor( private authService: AuthService ) { }

  setUser() {
    let token = window.sessionStorage.getItem( 'token' ) ? window.sessionStorage.getItem( 'token' ) : null;
    if ( token ) {
      this.authService.getUserDetailsByToken().subscribe( ( data ) => {
        this.user = new User( data );
      } )
    }
  }

  get hasUser(): boolean {
    return !!this.user
  }

}