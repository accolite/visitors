/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Gives flexibility to create custom ui for material snackbar
 */

import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component( {
  selector: 'snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: [ 'snack-bar.component.css' ]
} )

export class SnackbarComponent {
  constructor( public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject( MAT_SNACK_BAR_DATA ) public data: any ) { }
}