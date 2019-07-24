import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";

@Component({
  selector: "app-pre-approved-request",
  templateUrl: "./pre-approved-request.component.html",
  styleUrls: ["./pre-approved-request.component.css"]
})
export class PreApprovedRequestComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = ["badgeNo", "Name", "contactPerson", "actions", "remarks"];

  constructor(private visitorService: VisitorService, private zone: NgZone) {
    super(zone);
  }

  getDataObservable(params: ServiceSearchParamsInputModel) {
    console.log(this.visitorService.fetchAllVisitors());
    return this.visitorService.fetchAllVisitors();
  }

  onAfterUpdateData(data: any) {
    this.visitors = data;
    this.dataSource = new MatTableDataSource(this.visitors);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
