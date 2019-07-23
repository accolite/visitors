import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";

@Component({
  selector: "app-pending-request",
  templateUrl: "./pending-request.component.html",
  styleUrls: ["./pending-request.component.css"]
})
export class PendingRequestComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;
  searchObj: any;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    "badgeNo",
    "Name",
    "inTime",
    "outTime",
    "actions",
    "remarks"
  ];

  constructor(private visitorService: VisitorService, private zone: NgZone) {
    super(zone);
  }

  getDataObservable(params: ServiceSearchParamsInputModel) {
    this.searchObj = {
      status: "PENDING"
    };
    return this.visitorService.searchVisitor(this.searchObj);
  }

  onAfterUpdateData(data: any) {
    this.visitors = data;
    this.dataSource = new MatTableDataSource(this.visitors);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.connect().value;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
