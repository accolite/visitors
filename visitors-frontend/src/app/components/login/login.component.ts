import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from 'src/config/constants';

@Component( {
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ],
} )

export class LoginComponent {

  constructor( private router: Router ) { }

  ngOnInit() { }

  callLogin() {
    window.location.href = urls.LOGIN;
  }

}