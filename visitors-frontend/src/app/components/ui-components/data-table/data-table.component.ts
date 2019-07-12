import { Component, Input, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArrayUtil } from 'src/app/helpers/array.util';



/**
 * @title Table with filtering
 */
@Component( {
  selector: 'data-table',
  styleUrls: [ 'data-table.component.css' ],
  templateUrl: 'data-table.component.html',
} )
export class DataTableComponent {

  @Input()
  dataSource: MatTableDataSource<any>;

  @Input()
  titles: Array<string> = [];

  displayedColumns: string[] = [];

  showTable: boolean = false;

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.dataSource ) {
      this.dataSource = new MatTableDataSource( changes.dataSource.currentValue );
      this.getDisplayedColumns();
    }
  }

  getDisplayedColumns() {
    this.displayedColumns = Object.keys( ArrayUtil.first( this.dataSource.data ) );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterContentInit() {
    this.showTable = true;
  }
}