/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * gives flexibility to search or create visitor details
 */


import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';
import { idType } from 'src/app/helpers/static-data';
import { VisitorModel } from 'src/app/helpers/models/visitors/visitors.model';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitSummaryModel } from 'src/app/helpers/models/visitors/visit-summary.model';
import { NgForm, FormControl } from '@angular/forms';
import { MatStep } from '@angular/material';
import { Router } from '@angular/router';
@Component( {
  selector: 'visitor-search-or-create',
  templateUrl: 'visitor-search-or-create.component.html',
  styleUrls: [ 'visitor-search-or-create.component.css' ],
} )
export class VisitorSearchOrCreateComponent {
  search$: Subject<string> = new Subject<string>();
  user: VisitorModel;
  data: any;
  search: string;
  model: { [ propName: string ]: any } = {}
  idTypes: Array<string> = idType;
  showLoading: boolean = false;

  @ViewChild( 'heroForm', { static: true } )
  heroForm: NgForm;

  isEmailPresent: boolean = true;

  @ViewChild( 'step', { static: true } )
  step: MatStep


  constructor( private visitorService: VisitorService, private router: Router ) {
    this.createUser();
  }

  ngOnInit() {
    this.search$.pipe(
      debounceTime( 1000 ),
      distinctUntilChanged(),
      filter( ( data ) => data != '' ),
      switchMap( ( data ) => { this.showLoading = true; return this.visitorService.getVisitorByEmailId( data ) } )
    ).subscribe( ( data ) => {
      this.data = data;
      if ( data ) {
        this.user = new VisitorModel( data );
        this.isEmailPresent = true;
        this.showLoading = false
      } else {
        this.createUser();
        this.user.emailId = this.search;
        this.isEmailPresent = false;
        this.showLoading = false

      }
    } )
  }

  createUser() {
    this.user = new VisitorModel();
    this.user.visitSummary = [];
    let visitSummary = new VisitSummaryModel();
    visitSummary.officeLocation = window.location.href.indexOf( '?loc' ) > -1 ? window.location.href.split( "=" )[ 1 ] : 'Bangalore'
    this.user.visitSummary.push( visitSummary );
  }

  searchValues( value: string, type: string ) {
    this.search = value;
    let regex = type === 'phoneNumber' ? `[0-9]+` : `[^@]+@[^\.]+\..+`;
    let data = value.match( regex )
    if ( type === 'email' && data ) {
      this.search$.next( value );
    }
  }

  onSubmit() {
    this.visitorService.createNewVisitor( this.user ).subscribe( () => {
      this.createUser();
      this.router.navigateByUrl( '/visitor' );
    } )
  }
}