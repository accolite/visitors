import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";
import { PreApprovedRequestComponent } from "../pre-approved-request/pre-approved-request.component";
import { ApprovedRequestComponent } from "../approved-request/approved-request.component";
import { tap } from "rxjs/operators";
import { RestService } from "src/app/services/base/rest.service";

@Component( {
  selector: "app-pending-request",
  templateUrl: "./pending-request.component.html",
  styleUrls: [ "./pending-request.component.css" ]
} )
export class PendingRequestComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;
  searchObj: any;
  visitorSummaryObj: any;

  @Input()
  approved: ApprovedRequestComponent;

  @Input()
  preApproved: PreApprovedRequestComponent;

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [ "Name", "badgeNo", "inTime", "actions", "remarks" ];
  ofcLocation: any;

  constructor(
    private visitorService: VisitorService,
    private zone: NgZone,
    private rest: RestService
  ) {
    super( zone );
  }

  getDataObservable( params: ServiceSearchParamsInputModel ) {
    this.searchObj = {
      status: "PENDING",
      officeLocation: this.ofcLocation
    };
    return this.visitorService.searchVisitor( this.searchObj );
  }

  onAfterUpdateData( data: any ) {
    this.visitors = data.data;
    this.dataSource = new MatTableDataSource( this.visitors );
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  approveVisitor( event ) {
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
      status: "APPROVED",
      scheduledTime: event[ "visitSummary" ].scheduledTime,
      remarks: event[ "visitSummary" ].remarks
    };
    this.visitorService
      .updateVisitSummary( event.id, this.visitorSummaryObj )
      .pipe( tap( this.rest.createNotifySnackbar( "successfully-approved" ) ) )
      .subscribe( () => {
        this.refreshData();
        if ( this.approved ) {
          this.approved.refreshData();
        }

      } );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
