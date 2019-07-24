import { Component, ViewChild, Input, AfterViewInit } from '@angular/core';
import { VisitorService } from 'src/app/services/visitor.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { VisitorComponent } from './components/visitor/visitor.component';
import { FormControl } from '@angular/forms';
import { merge, Observable, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-report',
  styleUrls: [ 'report.component.css' ],
  templateUrl: 'report.component.html'
} )

export class ReportComponent implements AfterViewInit {
  visitors: any;
  isLoadingResults = true;
  resultsLength = 0;
  pageSize = 10;

  @ViewChild( MatPaginator, { static: true } ) paginator: MatPaginator;
  @ViewChild( MatSort, { static: true } ) sort: MatSort;
  @Input() dataSource: MatTableDataSource<any>;

  firstNameFilter = new FormControl( '' );
  lastNameFilter = new FormControl( '' );
  //phoneNumberFilter = new FormControl( '' );
  purposeFilter = new FormControl( '' );
  contactPersonFilter = new FormControl( '' );
  inTimeFilter = new FormControl( '' );
  idTypeFilter = new FormControl( '' );
  filterValues = {};

  displayedColumns = [
    'firstName', 'lastName', 'phoneNumber', 'purpose',
    'contactPerson', 'inTime', 'idType', 'idNumber', 'actions'
  ];

  displayedSearchBoxes = [
    'firstName-search', 'lastName-search', 'purpose-search',
    'contactPerson-search', 'inTime-search', 'idType-search'
  ]; //'phoneNumber-search',

  constructor( private visitorService: VisitorService,
    private dialog: MatDialog,
    private route: ActivatedRoute ) { }

  ngAfterViewInit() {
    this.route.queryParams.subscribe( params => {
      this.filterValues[ 'officeLocation' ] = params.loc;
      this.paginator.pageIndex = 0;
    } );

    this.firstNameFilter.valueChanges.subscribe(
      firstName => {
        this.filterValues[ 'firstName' ] = firstName;
        this.paginator.pageIndex = 0;
      }
    );
    this.lastNameFilter.valueChanges.subscribe(
      lastName => {
        this.filterValues[ 'lastName' ] = lastName;
        this.paginator.pageIndex = 0;
      }
    );
    /* this.phoneNumberFilter.valueChanges.subscribe(
      phoneNumber => {
        this.filterValues.phoneNumber = phoneNumber;
        this.paginator.pageIndex = 0;
      }
    ); */
    this.purposeFilter.valueChanges.subscribe(
      purpose => {
        this.filterValues[ 'purpose' ] = purpose;
        this.paginator.pageIndex = 0;
      }
    );
    this.contactPersonFilter.valueChanges.subscribe(
      contactPerson => {
        this.filterValues[ 'contactPerson' ] = contactPerson;
        this.paginator.pageIndex = 0;
      }
    );
    this.inTimeFilter.valueChanges.subscribe(
      inTime => {
        this.filterValues[ 'inTime' ] = inTime;
        this.paginator.pageIndex = 0;
      }
    );
    this.idTypeFilter.valueChanges.subscribe(
      idType => {
        this.filterValues[ 'idType' ] = idType;
        this.paginator.pageIndex = 0;
      }
    );
    merge( this.firstNameFilter.valueChanges,
      this.lastNameFilter.valueChanges,
      // this.phoneNumberFilter.valueChanges,
      this.purposeFilter.valueChanges,
      this.contactPersonFilter.valueChanges,
      this.inTimeFilter.valueChanges,
      this.idTypeFilter.valueChanges,
      this.route.queryParams,
      this.paginator.page )
      .pipe(
        startWith( {} ),
        switchMap( () => {
          this.isLoadingResults = true;
          return this.visitorService.searchVisitor( this.filterValues, this.paginator.pageIndex, this.paginator.pageSize );
        } ),
        map( data => {
          // Flip flag to show that loading has finished.
          this.resultsLength = data[ 'total' ];
          return data;
        } ),
        catchError( () => {
          this.isLoadingResults = false;
          return observableOf( [] );
        } ),
      ).subscribe( data => {
        this.visitors = data[ 'data' ];
        this.dataSource = new MatTableDataSource( this.visitors );
        this.isLoadingResults = false;
        this.dataSource.sort = this.sort;
      } );
  }
  openDialog( row ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = row;
    dialogConfig.height = '600px';
    dialogConfig.width = '1000px';

    const matDialogRef = this.dialog.open( VisitorComponent, dialogConfig );
  }

}
