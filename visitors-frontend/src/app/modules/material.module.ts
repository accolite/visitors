/**
 *
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives the flexibility to add all Material declarations and imports inside this module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule,
  MatIconModule, MatToolbarModule, MatListModule, MatSidenavModule, MatSelectModule,
  MatGridListModule, MatDatepickerModule, MatSnackBarModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule
} from '@angular/material';
import { DataTableComponent } from '../components/ui-components/data-table/data-table.component';
import { CardComponent } from '../components/ui-components/card/card.component';
import { DropdownComponent } from '../components/ui-components/drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";

const componentDeclarations = [ DataTableComponent, CardComponent,
  DropdownComponent ];
const moduleDeclarations = [ CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatIconModule, MatCardModule, MatToolbarModule, MatListModule, MatSidenavModule, MatSelectModule, MatSnackBarModule,
  MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule, RouterModule ];

@NgModule( {
  declarations: [ ...componentDeclarations ],
  imports: [ ...moduleDeclarations ],
  exports: [ ...moduleDeclarations, ...componentDeclarations ]
} )
export class MaterialModule { }
