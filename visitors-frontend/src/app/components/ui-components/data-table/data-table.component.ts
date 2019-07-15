import { Component, Input, SimpleChanges, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArrayUtil } from 'src/app/helpers/array.util';
import { DataTableHelper } from 'src/app/helpers/data-table-helper.model';
import { MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';

/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to reduce code and create Material design table 
 * 
 * 
 * @property dataSource - to add Array of object 
 * @property tableHelpers - flexibility to add title and give sorting access
 * 
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
  tableHelpers: DataTableHelper[] = [];

  @Input()
  usePagination: boolean = false;

  @Input()
  paginationTypes: Array<number> = [ 5, 10, 20 ];

  @ViewChild( MatPaginator, { static: true } )
  paginator: MatPaginator;

  @ViewChild( MatSort, { static: true } )
  sort: MatSort;

  displayedColumns: string[] = [];
  ngOnChanges( changes: SimpleChanges ) {
    if ( changes.dataSource ) {
      this.dataSource = new MatTableDataSource( changes.dataSource.currentValue );
      this.getDisplayedColumns();
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.usePagination ? this.paginator : this.dataSource.paginator;
    this.dataSource.sort = this.sort;
  }

  getDisplayedColumns() {
    this.displayedColumns = Object.keys( ArrayUtil.first( this.dataSource.data ) );
  }

  applyFilter( filterValue: string ) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}