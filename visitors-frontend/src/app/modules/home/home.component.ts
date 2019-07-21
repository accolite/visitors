import { Component, OnInit, ViewChild, Input, NgZone } from "@angular/core";
import { DataObtainer } from "src/app/components/base/data-obtainer.component";
import { VisitorService } from "src/app/services/visitor.service";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent extends DataObtainer<any> {
  visitors: any;
  pagination = false;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    "firstName",
    "lastName",
    "phoneNumber",
    "purpose",
    "contactPerson",
    "inTime",
    "idType",
    "idNumber",
    "actions"
  ];

  constructor(private visitorService: VisitorService, private zone: NgZone) {
    super(zone);
  }

  getDataObservable(params: ServiceSearchParamsInputModel) {
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
