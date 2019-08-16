import { ROLETYPE } from './role-type.model';

export class User {
  id: string;

  email: string;

  firstName: string;

  lastName: string;

  photoUrl: string;

  phoneNumber: string;

  roles: Array<string> = [];

  constructor( jsonObj: any ) {
    Object.assign( this, jsonObj );
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  get role(){
    if(this.roles.includes('ROLE_ADMIN')){
      return 'Admin'
    } else if(this.roles.includes('ROLE_RECEPTION')){
      return 'Reception'
    } else {
      return 'User'
    }
  }
}