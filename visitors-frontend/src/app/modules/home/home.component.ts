import { Component, ViewChild, Input, NgZone } from "@angular/core";
import { VisitorService } from "src/app/services/visitor.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { ApprovedRequestComponent } from "./approved-request/approved-request.component";
import { PendingRequestComponent } from "./pending-request/pending-request.component";
import { PreApprovedRequestComponent } from "./pre-approved-request/pre-approved-request.component";
@Component( {
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: [ "./home.component.css" ]
} )
export class HomeComponent {
  visitors: any;
  pagination = false;

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

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [ "badgeNo", "Name", "inTime", "actions", "remarks" ];

  constructor( private visitorService: VisitorService, private zone: NgZone ) { }
}
