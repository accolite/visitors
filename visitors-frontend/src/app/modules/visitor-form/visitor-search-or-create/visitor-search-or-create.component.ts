import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, filter } from 'rxjs/operators';
import { idType } from 'src/app/helpers/static-data';
import { VisitorModel } from 'src/app/helpers/models/visitors/visitors.model';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitSummaryModel } from 'src/app/helpers/models/visitors/visit-summary.model';
@Component( {
  selector: 'visitor-search-or-create',
  templateUrl: 'visitor-search-or-create.component.html',
  styleUrls: [ 'visitor-search-or-create.component.css' ],
} )
export class VisitorSearchOrCreateComponent {
  search$: Subject<string> = new Subject<string>();
  user: VisitorModel;
  model: { [ propName: string ]: any } = {}
  idTypes: Array<string> = idType;
  lastKeyPress: number = 0

  constructor( private visitorService: VisitorService ) {
    this.user = new VisitorModel();
    this.user.visitSummary = [];
    this.user.visitSummary.push( new VisitSummaryModel() );
  }

  ngOnInit() {
    this.search$.pipe(
      debounceTime( 1000 ),
      distinctUntilChanged(),
      filter( ( data ) => data != '' ),
      switchMap( ( data ) => this.visitorService.getVisitorByEmailId( data ) )
    ).subscribe( ( data ) => {
      this.user = new VisitorModel( data );
    } )
  }

  searchValues( value: string, type: string ) {
    let regex = type === 'phoneNumber' ? `[0-9]+` : `[^@]+@[^\.]+\..+`;
    let data = value.match( regex )
    if ( type === 'email' && data ) {
      this.search$.next( value );
    } else if ( type === 'phoneNumber' && data ) {
      this.search$.next( value );
    }
  }

}