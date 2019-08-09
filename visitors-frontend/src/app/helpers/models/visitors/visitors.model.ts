/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Visitor Model 
 */

import { VisitSummaryModel } from './visit-summary.model';
import { ArrayUtil } from '../../array.util';

export class VisitorModel {

  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  emailId: string;
  idType: number;
  idNumber: number;
  visitorType: string;
  visitSummary: VisitSummaryModel[];

  constructor( jsonObj?: {} ) {
    Object.assign( this, jsonObj );
    if ( ArrayUtil.isNotEmpty( this.visitSummary ) ) {
      this.visitSummary = this.visitSummary.map( ( visitSummaryModel: VisitSummaryModel ) => new VisitSummaryModel( visitSummaryModel ) )
    }
  }
}