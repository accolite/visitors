import { Component, ViewChild, Input, NgZone, OnInit, Output, EventEmitter } from "@angular/core";
import { VisitorService } from "src/app/services/visitor.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { ApprovedRequestComponent } from "./approved-request/approved-request.component";
import { PendingRequestComponent } from "./pending-request/pending-request.component";
import { PreApprovedRequestComponent } from "./pre-approved-request/pre-approved-request.component";
import { ActivatedRoute } from "@angular/router";
import { ArrayUtil } from 'src/app/helpers/array.util';
@Component( {
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
} )
export class HomeComponent {
  visitors: any;
  pagination = false;
  ofcLocation: Array<string>;

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  @ViewChild( ApprovedRequestComponent, { static: true } )
  approved: ApprovedRequestComponent;

  @ViewChild( PendingRequestComponent, { static: true } )
  pending: PendingRequestComponent;

  @ViewChild( PreApprovedRequestComponent, { static: true } )
  preApproved: PreApprovedRequestComponent;

  @Output()
  approvedChange: EventEmitter<ApprovedRequestComponent> = new EventEmitter<ApprovedRequestComponent>();

  @Output()
  preapprovedChange: EventEmitter<PreApprovedRequestComponent> = new EventEmitter<PreApprovedRequestComponent>();

  @Output()
  pendingChange: EventEmitter<PendingRequestComponent> = new EventEmitter<PendingRequestComponent>();

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [ "badgeNo", "Name", "inTime", "actions", "remarks" ];

  constructor( private route: ActivatedRoute ) {
    this.changeParamData()
  }

  // ngOnInit() {
  //   this.route.queryParams.subscribe( params => {
  //     this.approved.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
  //     this.approved.refreshData();
  //     this.pending.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
  //     this.pending.refreshData();
  //     this.preApproved.ofcLocation = JSON.parse( JSON.stringify( this.ofcLocation ) );
  //     this.preApproved.refreshData();
  //   } );
  // }

  ngDoCheck() {
    let localUrl: any = this.checkUrl() && this.getLocation() ? this.getLocation() : [];
    if ( ArrayUtil.isNotEmpty( localUrl ) && localUrl.sort().toString() != this.ofcLocation.sort().toString() ) {
      this.ofcLocation = JSON.parse( JSON.stringify( localUrl ) )
    }
  }

  ngAfterViewInit() {
    this.preapprovedChange.emit( this.preApproved );
    this.approvedChange.emit( this.approved );
    this.pendingChange.emit( this.pending );
  }

  changeParamData() {
    if ( this.checkUrl() ) {
      this.ofcLocation = this.getLocation()
    } else {
      this.ofcLocation = [ 'Bangalore' ];
    }
  }

  private checkUrl() {
    return window.location.href.indexOf( '?loc' ) > -1;
  }

  private getLocation() {
    let value: string = window.location.href.split( "=" )[ 1 ];
    return value.split( ',' );
  }
}
