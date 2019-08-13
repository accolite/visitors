/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Basic interceptors for all http related calls
 */

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContextService } from './context.service';
import { Router } from '@angular/router';

@Injectable()

export class RestInterceptor implements HttpInterceptor {

  constructor( private contextService: ContextService, private router: Router ) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if ( this.contextService && this.contextService.hasUser || window.sessionStorage.getItem( 'token' ) ) {
      request = request.clone( {
        setHeaders: {
          Authorization: `Bearer ${ window.sessionStorage.getItem( 'token' ) }`
        }
      } )
      return next.handle( request );
    } else {
      this.router.navigateByUrl( '/login' );
      return next.handle( null );
    }
  }

}