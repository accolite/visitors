import { ROLETYPE } from './role-type.model';

export class User {
  id: string;

  email: string;

  FirstName: string;

  LastName: string;

  photoUrl: string;

  phoneNumber: string;

  roles: Array<ROLETYPE> = [];

  constructor( jsonObj: any ) {
    Object.assign( this, jsonObj );
  }
}