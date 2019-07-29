import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component( {
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ],
} )

export class loginComponent {
  form: FormGroup;
  submitted = false;
  constructor( private router: Router, private auth: AuthService, private formBuilder: FormBuilder ) {
    this.auth.subject$.next( false )

  }
  // username: string;
  // password: string;
  ngOnInit() {


    this.form = this.formBuilder.group( {
      userName: [ "", Validators.required ],
      Password: [ "", Validators.required ],

    } );
  }
  // initializeFormGroup() {
  //   this.form.setValue( {
  //     userName: "",
  //     Password: "",

  //   } );
  // }

  // login(): void {
  //   if ( this.username == 'admin' && this.password == 'admin' ) {
  //     this.auth.subject$.next( true )
  //     this.router.navigate( [ "visitor" ] );
  //   } else {
  //     this.auth.subject$.next( false )

  //     alert( "Invalid credentials" );
  //   }
  // }

  get f() { return this.form.controls; }

  login() {
    this.submitted = true;
    if ( this.form.value.userName == 'admin' && this.form.value.Password == 'admin' ) {
      console.log( this.form.value );
      this.auth.subject$.next( true )
      this.router.navigate( [ "visitor" ] );
    } else {
      this.auth.subject$.next( false )

      //  alert( "Invalid credentials" );
    }
  }
}