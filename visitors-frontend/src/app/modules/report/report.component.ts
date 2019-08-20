import { Component, ViewChild, Input, OnDestroy, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/services/visitor.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialogConfig, MatDialog } from '@angular/material';
import { VisitorComponent } from './components/visitor/visitor.component';
import { FormControl } from '@angular/forms';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-report',
  styleUrls: [ 'report.component.css' ],
  templateUrl: 'report.component.html'
} )

export class ReportComponent implements OnDestroy, OnInit {
  visitors: any;
  isLoadingResults = true;
  resultsLength = 0;
  pageSize = 10;
  private subscription: Subscription;

  @ViewChild( MatPaginator, { static: true } ) paginator: MatPaginator;
  @ViewChild( MatSort, { static: true } ) sort: MatSort;
  @Input() dataSource: MatTableDataSource<any>;

  firstNameFilter = new FormControl( '' );
  lastNameFilter = new FormControl( '' );
  phoneNumberFilter = new FormControl( '' );
  purposeFilter = new FormControl( '' );
  contactPersonFilter = new FormControl( '' );
  inTimeFilter = new FormControl( '' );
  idTypeFilter = new FormControl( '' );
  filterValues = {};

  displayedColumns = [
    'firstName', 'lastName', 'phoneNumber', 'purpose',
    'contactPerson', 'inTime', 'idType', 'idNumber'
  ];

  displayedSearchBoxes = [
    'firstName-search', 'lastName-search', 'phoneNumber-search', 'purpose-search',
    'contactPerson-search', 'inTime-search', 'idType-search'
  ];

  constructor( private visitorService: VisitorService,
    private dialog: MatDialog,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.filterValues[ 'officeLocation' ] = params.loc;
      console.log( "ll" + params.loc );
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
        if ( phoneNumber.length == 10 ) {
          console.log( 'HIT' );
          this.paginator.pageIndex = 0;
        }
        this.filterValues[ 'phoneNumber' ] = phoneNumber;

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
    this.subscription = merge( this.firstNameFilter.valueChanges,
      this.lastNameFilter.valueChanges,
      // this.phoneNumberFilter.valueChanges,
      this.purposeFilter.valueChanges,
      this.contactPersonFilter.valueChanges,
      this.inTimeFilter.valueChanges,
      this.idTypeFilter.valueChanges,
      this.route.queryParams,
      this.paginator.page )
      .pipe(
        debounceTime( 500 ),
        distinctUntilChanged(),
        startWith( {} ),
        switchMap( () => {
          /*if ( ( this.filterValues[ 'phoneNumber' ] && this.filterValues[ 'phoneNumber' ].length == 10 ) ||
            !this.filterValues[ 'phoneNumber' ] ) {*/
          this.isLoadingResults = true;
          return this.visitorService.searchVisitor( this.filterValues, this.paginator.pageIndex, this.paginator.pageSize );
          // }
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
        this.visitors = data[ 'data' ] ? data[ 'data' ] : [];
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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
