/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Common Rest Service for all Http calls
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observer } from 'rxjs';
import { accoliteSnackbarMessages } from '../../helpers/static-data';
import { SnackbarComponent } from 'src/app/components/ui-components/snack-bar/snack-bar.component';

@Injectable( {
  providedIn: 'root'
} )

export class RestService {

  constructor( private http: HttpClient, private snackbarService: MatSnackBar ) { }

  get( url: string, options: { params?: HttpParams, headers?: HttpHeaders } = {} ) {
    return this.http.get( url, options )
  }

  jsonPost( url: string, body?: any, options: { params?: HttpParams, headers?: HttpHeaders } = {} ) {
    return this.http.post( url, body, options )
  }

  jsonPut( url: string, body?: any, options: { params?: HttpParams, headers?: HttpHeaders } = {} ) {
    return this.http.put( url, body, options )
  }

  delete( url: string, options: { params?: HttpParams, headers?: HttpHeaders } = {} ) {
    return this.http.delete( url, options )
  }

  createSnackbar( message: string, action: string = "close", durationMS: number = 2000, cssClass: string, icon?: string ) {
    this.snackbarService.openFromComponent( SnackbarComponent, {
      data: {
        message: message,
        icon: icon ? icon : 'info',
        action: action,
        class: cssClass
      },
      duration: durationMS,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    } )
  }

  createNotifySnackbar( key: string, action: string = "close", durationMS: number = 2000 ) {
    let message = ( key ) => ( accoliteSnackbarMessages[ 'rest' ] )[ key ];
    let observer: Observer<any> = {
      next: ( data ) => {
        this.createSnackbar( message( 'success' )[ key ], action, durationMS, "success" )
      }, error: ( error ) => {
        this.createSnackbar( message( 'error' )[ key ], action, durationMS, "error" )
      }, complete: () => {
      }
    }
    return observer
  }

}