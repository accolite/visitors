import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog
} from "@angular/material";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";
import { ApprovedRequestComponent } from "../approved-request/approved-request.component";
import { PendingRequestComponent } from "../pending-request/pending-request.component";
import { RestService } from "src/app/services/base/rest.service";
import { tap } from "rxjs/operators";
import { DialogOverviewComponent } from "../dialog-overview/dialog-overview.component";

@Component({
  selector: "app-pre-approved-request",
  templateUrl: "./pre-approved-request.component.html",
  styleUrls: ["./pre-approved-request.component.css"]
})
export class PreApprovedRequestComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;
  searchObj: any;
  visitorSummaryObj: any;
  visitor: any;

  @Input()
  approved: ApprovedRequestComponent;

  @Input()
  pending: PendingRequestComponent;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = ["badgeNo", "Name", "contactPerson", "actions", "remarks"];

  constructor(
    private visitorService: VisitorService,
    private zone: NgZone,
    private rest: RestService,
    public dialog: MatDialog
  ) {
    super(zone);
  }

  getDataObservable(params: ServiceSearchParamsInputModel) {
    this.searchObj = {
      status: "SCHEDULED"
    };
    return this.visitorService.searchVisitor(this.searchObj);
  }

  onAfterUpdateData(data: any) {
    this.visitors = data && data.data ? data.data : null;
    this.dataSource = new MatTableDataSource(
      this.visitors ? this.visitors : []
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  cancelled(event) {
    this.visitorSummaryObj = {
      visitNumber: event["visitSummary"].visitNumber, // Existing one no need to change
      badgeNo: event["visitSummary"].badgeNo,
      comingFrom: event["visitSummary"].comingFrom,
      contactPerson: event["visitSummary"].contactPerson,
      contactPersonEmailId: event["visitSummary"].contactPersonEmailId,
      contactPersonPhone: event["visitSummary"].contactPersonPhone,
      purpose: event["visitSummary"].purpose,
      officeLocation: event["visitSummary"].officeLocation,
      inTime: event["visitSummary"].inTime,
      outTime: event["visitSummary"].outTime,
      status: "CANCELLED",
      scheduledTime: event["visitSummary"].scheduledTime,
      remarks: event["visitSummary"].remarks
    };
    console.log(this.visitorSummaryObj);

    this.visitorService
      .updateVisitSummary(event.id, this.visitorSummaryObj)
      .pipe(tap(this.rest.createNotifySnackbar("successfully-cancelled")))
      .subscribe(() => {
        this.refreshData();
      });
  }
  assignBadge(event) {
    this.visitor = {
      firstName: event.firstName,
      lastName: event.lastName,
      contactPerson: event.contactPerson,
      comingFrom: event.comingFrom,
      purpose: event.purpose,
      inTime: event.inTime,
      scheduledTime: event.scheduledTime,
      emailId: event.emailId
    };
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: "500px",
      data: this.visitor
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      //this.visitor = result;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
