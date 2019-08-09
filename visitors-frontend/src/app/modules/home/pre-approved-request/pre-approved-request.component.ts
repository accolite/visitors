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

@Component( {
  selector: "app-pre-approved-request",
  templateUrl: "./pre-approved-request.component.html",
  styleUrls: [ "./pre-approved-request.component.css" ]
} )
export class PreApprovedRequestComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;
  searchObj: any;
  visitorSummaryObj: any;
  visitorData: any;
  badge: any;
  visitorSummaryObj2: any;
  visitor: any;

  @Input()
  approved: ApprovedRequestComponent;

  @Input()
  pending: PendingRequestComponent;

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [ "Name", "badgeNo", "contactPerson", "actions", "remarks" ];
  ofcLocation: any;

  constructor(
    private visitorService: VisitorService,
    private zone: NgZone,
    private rest: RestService,
    public dialog: MatDialog
  ) {
    super( zone );
  }

  ngOnInit() {
    this.refreshData();
  }
  getDataObservable( params: ServiceSearchParamsInputModel ) {
    this.searchObj = {
      status: "SCHEDULED",
      officeLocation: this.ofcLocation
    };

    return this.visitorService.searchVisitor( this.searchObj );
  }

  onAfterUpdateData( data: any ) {
    this.visitors = data && data.data ? data.data : null;
    this.dataSource = new MatTableDataSource(
      this.visitors ? this.visitors : []
    );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  cancelled( event ) {
    this.visitorSummaryObj = {
      visitNumber: event[ "visitSummary" ].visitNumber, // Existing one no need to change
      badgeNo: event[ "visitSummary" ].badgeNo,
      comingFrom: event[ "visitSummary" ].comingFrom,
      contactPerson: event[ "visitSummary" ].contactPerson,
      contactPersonEmailId: event[ "visitSummary" ].contactPersonEmailId,
      contactPersonPhone: event[ "visitSummary" ].contactPersonPhone,
      purpose: event[ "visitSummary" ].purpose,
      officeLocation: event[ "visitSummary" ].officeLocation,
      inTime: event[ "visitSummary" ].inTime,
      outTime: event[ "visitSummary" ].outTime,
      status: "CANCELLED",
      scheduledTime: event[ "visitSummary" ].scheduledTime,
      remarks: event[ "visitSummary" ].remarks
    };
    this.visitorService
      .updateVisitSummary( event.id, this.visitorSummaryObj )
      .pipe( tap( this.rest.createNotifySnackbar( "successfully-cancelled" ) ) )
      .subscribe( () => {
        this.refreshData();
      } );
  }
  assignBadge( event ) {
    const dialogRef = this.dialog.open( DialogOverviewComponent, {
      width: "500px",
      data: event
    } );

    dialogRef.afterClosed().subscribe( result => {

      result.data.visitSummary.status = "PENDING";
      this.visitor = {
        // badgeNo: result.data.visitSummary.badgeNo,
        visitSummary: [ result.data.visitSummary ],


        firstName: result.data.firstName,
        lastName: result.data.lastName,
        id: result.data.id,
        idType: result.data.idType,
        emailId: result.data.emailId,

        idNumber: result.data.idNumber,
        visitorType: result.data.visitorType,
        phoneNumber: result.data.phoneNumber
      };
      console.log( result.data );
      this.visitorService
        .updateVisitSummary( result.data.id, result.data.visitSummary )
        .subscribe( () => {
          this.visitorService.sendNotifyMail( this.visitor ).subscribe();
          this.refreshData();
          if ( this.pending ) {
            this.pending.refreshData();
          }
        } );
    } );
  }
  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
