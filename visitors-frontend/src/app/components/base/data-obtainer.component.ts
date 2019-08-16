/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives Flexiblity for all Component to reuse all methodwith loader and subscription functionality.
 * extend Component to enhance this feature.
 *
 */
import { Component, NgZone } from "@angular/core";
import { ServiceSearchParamsInputModel } from "src/app/helpers/models/service-search-params-input.model";
import { Observable } from "rxjs";
import { ArrayUtil } from "src/app/helpers/array.util";

export abstract class DataObtainer<T> {
  loading: boolean = false;
  data: T;
  parameters: ServiceSearchParamsInputModel = new ServiceSearchParamsInputModel();
  refreshOnInit: boolean = true;

  constructor( private zones: NgZone ) { }

  ngOnInit() {
    if ( this.refreshOnInit ) {
      this.zones.run( () => this.refreshData() );
    }
  }

  refreshData() {
    this.onBeforeUpdateData();
    this.loading = true;
    this.getDataObservable( this.parameters ).subscribe(
      data => {
        this.data = JSON.parse( JSON.stringify( data ) );
        this.onAfterUpdateData( data );
        this.onNextStage( data );
        this.loading = false;
      },
      ( error: any ) => {
        this.onErrorStage( error );
      },
      () => {
        this.onCompleteStage();
      }
    );
  }

  protected abstract getDataObservable(
    parameters: ServiceSearchParamsInputModel
  ): Observable<any>;
  protected onBeforeUpdateData() { }
  protected onAfterUpdateData( data: any ) { }
  protected onCompleteStage() { }
  protected onNextStage( data: any ) { }
  protected onErrorStage( error: any ) { }
}
