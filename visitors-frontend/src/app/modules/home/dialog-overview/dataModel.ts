export class dataModel {
  firstName: string;
  lastname: string;
  phoneNumber: number;
  emailId: string;

  badgeNo: number;
  comingFrom: string;
  contactPerson: string;
  purpose: string;
  inTime: string;
  scheduledStartDate: string
  scheduledEndDate: string;
  [ propName: string ]: any;

  constructor( jsonObj?: {} ) {
    Object.assign( this, jsonObj );
  }
}
