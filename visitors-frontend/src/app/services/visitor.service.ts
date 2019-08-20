import { HttpParams, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { urls } from "../../config/constants";
import { RestService } from "./base/rest.service";
import { Observable, of } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class VisitorService {
  constructor( private restService: RestService ) { }


  getVisitorByEmailId( emailId: string ) {
    return this.restService.get( urls.BASE_URL + urls.GET_VISITOR_BY_EMAIL + emailId ).pipe( catchError( ( err ) => {
      return of( null );
    } ) );
  }

  createNewVisitor( visitorObj: any ) {
    console.log( visitorObj );
    return this.restService
      .jsonPost( urls.BASE_URL + urls.CREATE_NEW_VISITOR, visitorObj )
      .pipe( tap( this.restService.createNotifySnackbar( "create-visitors" ) ) );
  }

  addVisitorSummary( visitorObj: any ) {
    return this.restService
      .jsonPut( urls.BASE_URL + urls.ADD_VISIT_SUMMARY, visitorObj )
      .pipe( tap( this.restService.createNotifySnackbar( "add-visit" ) ) );

  }

  updateVisitorDetails( visitorId: string, visitorObj: any ) {
    return this.restService.jsonPatch(
      urls.BASE_URL + urls.UPDATE_VISITOR_DETAILS + visitorId,
      visitorObj
    );
  }

  updateVisitSummary( visitorId: string, visitSummaryObj: any ) {
    return this.restService
      .jsonPatch( urls.BASE_URL + urls.UPDATE_VISITOR_SUMMARY + visitorId, visitSummaryObj )
      .pipe( tap( this.restService.createNotifySnackbar( "update-visit-summary" ) ) );
  }

  sendApprovalMail( reqObj: any ) {
    return this.restService
      .jsonPost( urls.BASE_URL + urls.SEND_APPROVAL_MAIL, reqObj );
  }

  sendNotifyMail( reqObj: any ) {
    return this.restService
      .jsonPost( urls.BASE_URL + urls.SEND_NOTIFY_MAIL, reqObj )
      .pipe( tap( this.restService.createNotifySnackbar( "notify-email" ) ) );
  }

  fetchAllVisitors() {
    return this.restService.get( urls.BASE_URL );
  }

  fetchVisitorsByInTime( startDate: string, endDate: string ) {
    let params = new HttpParams();
    params.set( "startDate", startDate );
    params.set( "endDate", endDate );
    return this.restService.get( urls.BASE_URL + urls.GET_VISITORS_BY_IN_TIME, {
      params: params
    } );
  }

  updateExitTime( visitorId: string, reqObj: any ) {
    return this.restService.jsonPut(
      urls.BASE_URL + urls.EXIT_TIME + visitorId,
      reqObj
    );
  }

  fetchVisitor( id: string ) {
    return this.restService.get( urls.BASE_URL + id );
  }

  searchVisitor( searchObj: any, page: number = 0, pageSize: number = 10 ) {
    let searchURL =
      urls.BASE_URL + urls.SEARCH + `?page=${ page }&size=${ pageSize }`;
    console.log( searchObj );
    return this.restService.jsonPost( searchURL, searchObj );
  }

  deleteVisitorSummary( visitSummaryId: string ) {
    return this.restService.get( urls.BASE_URL + visitSummaryId );
  }
  approveOnBehalf( reqObj: any ) {
    return this.restService.jsonPost( urls.BASE_URL + urls.APPROVE_ON_BEHALF, reqObj );
  }

}
