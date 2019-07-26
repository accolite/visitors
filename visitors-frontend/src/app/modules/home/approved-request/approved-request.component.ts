import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";
import { PendingRequestComponent } from "../pending-request/pending-request.component";
import { PreApprovedRequestComponent } from "../pre-approved-request/pre-approved-request.component";
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: "app-approved-request",
  templateUrl: "./approved-request.component.html",
  styleUrls: [ "./approved-request.component.css" ]
} )
export class ApprovedRequestComponent extends DataObtainer<any> implements OnInit {
  visitors: any;
  pagination = false;
  searchObj = {};
  clicked = false;

  @Input()
  pending: PendingRequestComponent;

  @Input()
  preApproved: PreApprovedRequestComponent;

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [ "Name", "badgeNo", "inTime", "actions", "remarks" ];
  @Input()
  ofcLocation: any;

  constructor( private visitorService: VisitorService, private zone: NgZone, private route: ActivatedRoute ) {
    super( zone );
  }

  getDataObservable( params: ServiceSearchParamsInputModel ) {
    this.searchObj = {
      status: 'APPROVED',
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
  exit( data ) {
    this.visitorService
      .updateExitTime(
        data.id,
        data.visitSummary.visitNumber,
        data.visitSummary.remarks
      )
      .subscribe( val => {
        this.refreshData();
      } );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
