import { Component, ViewChild, Input, NgZone, OnInit, Output, EventEmitter } from "@angular/core";
import { VisitorService } from "src/app/services/visitor.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { ApprovedRequestComponent } from "./approved-request/approved-request.component";
import { PendingRequestComponent } from "./pending-request/pending-request.component";
import { PreApprovedRequestComponent } from "./pre-approved-request/pre-approved-request.component";
import { ActivatedRoute } from "@angular/router";
@Component( {
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
} )
export class HomeComponent implements OnInit {
  visitors: any;
  pagination = false;
  ofcLocation: string;

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

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.approved.ofcLocation = params.loc;
      this.approved.refreshData();
      this.pending.ofcLocation = params.loc;
      this.pending.refreshData();
      this.preApproved.ofcLocation = params.loc;
      this.preApproved.refreshData();
    } );
  }

  ngAfterViewInit() {
    this.preapprovedChange.emit( this.preApproved );
    this.approvedChange.emit( this.approved );
    this.pendingChange.emit( this.pending );
  }
}
