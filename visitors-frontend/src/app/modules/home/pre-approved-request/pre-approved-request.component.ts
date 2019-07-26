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

import { dataModel } from "../dialog-overview/dataModel";

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
  badge: any;
  visitorSummaryObj2: any;

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

  displayedColumns = ["Name", "badgeNo", "contactPerson", "actions", "remarks"];

  constructor(
    private visitorService: VisitorService,
    private zone: NgZone,
    private rest: RestService,
    public dialog: MatDialog
  ) {
    super(zone);
  }

  ngOnInit() {
    this.refreshData();
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
    console.log(event);
    this.visitor = {
      firstName: event.firstName,
      lastName: event.lastName,
      badgeNo: event.visitSummary.badgeNo,
      phoneNumber: event.phoneNumber,
      contactPerson: event.visitSummary.contactPerson,
      comingFrom: event.visitSummary.comingFrom,
      purpose: event.visitSummary.purpose,
      inTime: event.visitSummary.inTime,
      scheduledTime: event.visitSummary.scheduledTime,
      emailId: event.emailId
    };
    console.log(this.visitor);
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: "500px",
      data: this.visitor
    });

    dialogRef.afterClosed().subscribe(result => {
      let dialogRefModel = new dataModel(result.data);
      // console.log(lll);

      let putVisitor = this.visitors.filter(
        (data: any) => dialogRefModel.phoneNumber == data.phoneNumber
      )[0];

      putVisitor.visitSummary.badgeNo = dialogRefModel.badgeNo;
      this.visitorService
        .updateVisitSummary(putVisitor.id, putVisitor.visitSummary)
        .subscribe();
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
