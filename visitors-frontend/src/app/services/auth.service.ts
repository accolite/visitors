/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Service for all application auth related methods
 */

import { Injectable } from '@angular/core';
import { RestService } from './base/rest.service';
import { urls } from 'src/config/constants';


@Injectable( {
  providedIn: 'root'
} )

export class AuthService {

  constructor( private restService: RestService ) { }

  getUserDetailsByToken( token: string ) {
    return this.restService.get( `${ urls.GET_USER_DETAILS }/${ token }` )
  }

}