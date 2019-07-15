import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private http: HttpClient) { }

  createNewVisitor(visitorObj: any) {
    return this.http.post(urls.BASE_URL + urls.CREATE_NEW_VISITOR, visitorObj);
  }

  fetchAllVisitors() {
    return this.http.get(urls.BASE_URL);
  }

  fetchVisitorsByInTime(startDate: string, endDate: string) {
    let params = new HttpParams();
    params.set('startDate', startDate);
    params.set('endDate', endDate);
    return this.http.get(urls.BASE_URL + urls.GET_VISITORS_BY_IN_TIME, { params: params });
  }

  updateExitTime(visitorSummaryId: string, exitTime: number) {
    return this.http.put(urls.BASE_URL + visitorSummaryId, exitTime);
  }

  fetchVisitor(id: string) {
    return this.http.get(urls.BASE_URL + id);
  }

  searchVisitor(searchObj: any) {
    return this.http.post(urls.BASE_URL + urls.SEARCH, searchObj);
  }

  deleteVisitorSummary(visitSummaryId: string) {
    return this.http.get(urls.BASE_URL + visitSummaryId);
  }
}
