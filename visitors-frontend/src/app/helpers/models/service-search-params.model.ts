/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Used to add parameters for http request
 * note - needs service search parameters for http parameters
 */

import { HttpParams } from '@angular/common/http';
import { ServiceSearchParamsInputModel } from './service-search-params-input.model';

export class ServiceSearchParamsModel extends HttpParams {
  [ props: string ]: any;
  private retriveParams = [];

  constructor( parameters: ServiceSearchParamsInputModel ) {
    super();
    this.fromObject( parameters );
  }

  fromObject( parameters: ServiceSearchParamsInputModel ) {
    let keys: string[] = Object.keys( parameters );
    keys.forEach( ( key ) => {
      this[ key ] = parameters[ key ]
    } )
  }

  add( param: string, value: string ) {
    this.retriveParams.push( [ param, value ] );
  }

  get params() {
    return Object.assign( {}, ...this.retriveParams.map( ( data: Array<any> ) => { let obj = {}; obj[ data[ 0 ] ] = data[ 1 ]; return obj } ) );
  }

}