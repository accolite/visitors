import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { VisitorService } from 'src/app/services/visitor.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component( {
  selector: 'app-report',
  styleUrls: [ 'report.component.css' ],
  templateUrl: 'report.component.html'
} )

export class ReportComponent implements OnInit {
  visitors: any;
  pagination = false;

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  @Input()
  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    'firstName', 'lastName', 'phoneNumber', 'purpose',
    'contactPerson', 'inTime', 'idType', 'idNumber', 'actions'
  ];

  constructor( private visitorService: VisitorService ) { }

  ngOnInit() {

    this.visitorService.fetchAllVisitors().subscribe(
      ( res: any ) => {
        this.visitors = res;
        this.dataSource = new MatTableDataSource( this.visitors );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
