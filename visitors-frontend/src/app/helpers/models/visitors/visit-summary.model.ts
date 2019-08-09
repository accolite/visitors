/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Visit Summary Model used in Visitor Model
 */

export class VisitSummaryModel {

  badgeNo: number;
  comingFrom: string;
  contactPerson: string;
  contactPersonEmailId: string;
  contactPersonPhone: string;
  purpose: string;
  officeLocation: string;
  inTime: string;
  outTime: string;
  status: string;
  scheduledTime: string;
  remarks: string;

  constructor( jsonObj?: {} ) {
    Object.assign( this, jsonObj );
  }

}

