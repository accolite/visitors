import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { urls } from "../../config/constants";
import { RestService } from "./base/rest.service";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VisitorService {
  constructor(private restService: RestService) {}

  getVisitorByEmailId(emailId: string) {
    return this.restService
      .get(urls.BASE_URL + urls.GET_VISITOR_BY_EMAIL + emailId)
      .pipe(
        catchError(err => {
          this.restService.catchError(of(err));
          return of(null);
        })
      );
  }

  createNewVisitor(visitorObj: any) {
    return this.restService
      .jsonPost(urls.BASE_URL + urls.CREATE_NEW_VISITOR, visitorObj)
      .pipe(tap(this.restService.createNotifySnackbar("create-visitors")));
  }

  addVisitorSummary(visitorId: string, visitorSummaryObj: any) {
    return this.restService.jsonPost(
      urls.BASE_URL + urls.ADD_VISIT_SUMMARY + visitorId,
      visitorSummaryObj
    );
  }

  updateVisitorDetails(visitorId: string, visitorObj: any) {
    return this.restService.jsonPost(
      urls.BASE_URL + urls.UPDATE_VISITOR_DETAILS + visitorId,
      visitorObj
    );
  }

  updateVisitSummary(visitorId: string, visitSummaryObj: any) {
    return this.restService.jsonPut(
      urls.BASE_URL + urls.UPDATE_VISITOR_SUMMARY + visitorId,
      visitSummaryObj
    );
  }

  sendApprovalMail(reqObj: any) {
    return this.restService.jsonPost(
      urls.BASE_URL + urls.SEND_APPROVAL_MAIL,
      reqObj
    );
  }

  sendNotifyMail(reqObj: any) {
    return this.restService.jsonPost(
      urls.BASE_URL + urls.SEND_NOTIFY_MAIL,
      reqObj
    );
  }

  fetchAllVisitors() {
    return this.restService.get(urls.BASE_URL);
  }

  fetchVisitorsByInTime(startDate: string, endDate: string) {
    let params = new HttpParams();
    params.set("startDate", startDate);
    params.set("endDate", endDate);
    return this.restService.get(urls.BASE_URL + urls.GET_VISITORS_BY_IN_TIME, {
      params: params
    });
  }

  updateExitTime(visitorId: string, visitNumber: number, remarks: string) {
    const reqObj = {
      visitNumber: visitNumber,
      remarks: remarks
    };
    return this.restService.jsonPut(
      urls.BASE_URL + urls.EXIT_TIME + visitorId,
      reqObj
    );
  }

  fetchVisitor(id: string) {
    return this.restService.get(urls.BASE_URL + id);
  }

  searchVisitor(searchObj: any) {
    return this.restService.jsonPost(urls.BASE_URL + urls.SEARCH, searchObj);
  }

  deleteVisitorSummary(visitSummaryId: string) {
    return this.restService.get(urls.BASE_URL + visitSummaryId);
  }
}
