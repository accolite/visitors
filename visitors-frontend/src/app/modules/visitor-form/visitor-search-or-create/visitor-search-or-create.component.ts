/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * gives flexibility to search or create visitor details
 */


import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';
import { idType, visitPurposes, addVisitStatus } from 'src/app/helpers/static-data';
import { VisitorModel } from 'src/app/helpers/models/visitors/visitors.model';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitSummaryModel } from 'src/app/helpers/models/visitors/visit-summary.model';
import { NgForm, FormControl } from '@angular/forms';
import { MatStep } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ArrayUtil } from 'src/app/helpers/array.util';

@Component( {
  selector: 'visitor-search-or-create',
  templateUrl: 'visitor-search-or-create.component.html',
  styleUrls: [ 'visitor-search-or-create.component.css' ],
} )
export class VisitorSearchOrCreateComponent {
  searchVisitor$: Subject<string> = new Subject<string>();
  user: VisitorModel;
  data: any;
  search: string;
  model: { [ propName: string ]: any } = {};
  idTypes: Array<string> = idType;
  visitPurposes: Array<string> = visitPurposes;
  addVisitStatus: Array<string> = addVisitStatus;
  showLoading = false;
  officeLocation = 'Bangalore';
  minDate: any;

  @ViewChild( "heroForm", { static: true } )
  heroForm: NgForm;

  isEmailPresent = true;

  @ViewChild( 'step', { static: true } )
  step: MatStep;
  isAddVisit = false;
  visitStatus: string;
  checked = false;
  @ViewChild( 'ref', { static: true } ) ref;

  constructor( private visitorService: VisitorService, private router: Router,
    private route: ActivatedRoute ) {
    this.createUser();
  }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.officeLocation = params.loc;
      //this.officeLocation = this.officeLocation.toString();
    } );
    this.searchVisitor$.pipe(
      debounceTime( 1000 ),
      distinctUntilChanged(),
      filter( ( data ) => data != '' ),
      switchMap( ( data ) => {
        this.showLoading = true;
        return this.visitorService.getVisitorByEmailId( data );
      } )
    ).subscribe( ( data ) => {
      this.data = data;
      console.log( this.data );
      this.isAddVisit = false;
      if ( data && data.visitSummary[ 0 ] && addVisitStatus.indexOf( data.visitSummary[ 0 ].status ) !== -1 ) {
        this.user = new VisitorModel( data );
        this.isEmailPresent = true;
        this.isAddVisit = true;
        this.visitStatus = 'NEW';
      } else if ( data ) {
        this.user = new VisitorModel( data );
        this.isEmailPresent = true;
        this.visitStatus = data.visitSummary[ 0 ].status;
      } else {
        this.createUser();
        this.user.emailId = this.search;
        this.isEmailPresent = false;
        this.visitStatus = 'NEW';
      }
      this.showLoading = false;
    } );
  }

  createUser() {
    this.user = new VisitorModel();
    this.user.visitSummary = [];
    const visitSummary = new VisitSummaryModel();
    visitSummary.officeLocation = this.officeLocation.toString();

    this.user.visitSummary.push( visitSummary );

  }
  onClick( event ) {
    event.preventDefault();
    // console.log( 'onClick this.ref._checked ' + this.ref._checked );
    this.ref._checked = !this.ref._checked;
  }

  addVisitSummary() {
    let visitSummary = {
      ...this.user.visitSummary[ 0 ],
      officeLocation: this.officeLocation,
      visitNumber: this.data.visitSummary[ 0 ].visitNumber + 1,
      status: 'PENDING',
      outTime: null,
      remarks: null
    };
    this.user.visitSummary = [];
    this.user.visitSummary.push( visitSummary );
  }
  updateVisitSummary() {
    console.log( 'visit Summary', this.user.visitSummary );
    let visitSummary = {
      ...this.user.visitSummary[ 0 ],
      officeLocation: this.officeLocation,
    };
    this.user.visitSummary = [];
    this.user.visitSummary.push( visitSummary );
  }
  searchValues( value: string, type: string ) {
    this.search = value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const data = regex.test( value.toLowerCase() );

    if ( type === 'email' && data === true ) {
      this.searchVisitor$.next( value );
    }
  }

  onSubmit() {

    if ( this.ref._checked === false ) {
      this.user.visitSummary[ 0 ].scheduledEndDate = null;
      this.user.visitSummary[ 0 ].scheduledStartDate = null;
      this.user.visitSummary[ 0 ].status = null;


    }
    else {

      this.user.visitSummary[ 0 ].status = "SCHEDULED";
    }
    // const visitSummary = new VisitSummaryModel( this.user.visitSummary );
    // visitSummary[ 0 ].officeLocation = this.officeLocation.toString();
    // this.user.visitSummary[ "officelocation" ] = visitSummary.officeLocation;
    // console.log( this.user.visitSummary[ "officelocation" ] );
    this.user.visitSummary[ 0 ].scheduledStartDate = this.convert( this.user.visitSummary[ 0 ].scheduledStartDate );
    this.user.visitSummary[ 0 ].scheduledEndDate = this.convert( this.user.visitSummary[ 0 ].scheduledEndDate );
    console.log( this.user );
    this.visitorService.createNewVisitor( this.user ).subscribe( () => {
      this.createUser();
      this.router.navigateByUrl( '/visitor' );
    } );
  }
  convert( str ) {
    var date = new Date( str ),
      mnth = ( "0" + ( date.getMonth() + 1 ) ).slice( -2 ),
      day = ( "0" + date.getDate() ).slice( -2 );
    return [ date.getFullYear(), mnth, day ].join( "-" );
  }



  onAddVisit() {
    let visitSummary;
    if ( ArrayUtil.isNotEmpty( this.user.visitSummary ) ) {
      visitSummary = this.user.visitSummary[ this.user.visitSummary.length - 1 ]
      let visitorObj = new VisitorModel( JSON.parse( JSON.stringify( this.user ) ) );
      visitorObj.visitSummary = [];
      visitorObj.visitSummary.push( visitSummary )

    } else {
      visitSummary = this.user.visitSummary[ 0 ]
    }
    this.addVisitSummary();
    console.log( this.user )
    // this.visitorService.addVisitorSummary( this.user ).subscribe( () => {
    //   this.router.navigateByUrl( '/visitor' );
    // } );
  }

  onUpdateVisit() {
    this.updateVisitSummary();
    console.log( this.user.id, this.user.visitSummary[ 0 ] );
    this.visitorService.updateVisitSummary( this.user.id, this.user.visitSummary[ 0 ] ).subscribe( () => {
      this.router.navigateByUrl( '/visitor' );
    } );
  }

  onNotify() {
    this.visitorService.sendNotifyMail( this.user ).subscribe( () => {
      this.router.navigateByUrl( '/visitor' );
    } );
  }

}
