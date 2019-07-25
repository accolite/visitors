import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable( {
  providedIn: 'root'
} )

export class AuthService {
  subject$ = new BehaviorSubject<boolean>( false )

}