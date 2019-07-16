/**
 *
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 *
 * Gives the flexibility to add all Material elements inside this module
 */

/* Gives the flexibility to add all Material declarations and imports inside this module
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatSelectModule,
  MatGridListModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatNativeDateModule
} from '@angular/material';
import { DataTableComponent } from '../components/ui-components/data-table/data-table.component';
import { CardComponent } from '../components/ui-components/card/card.component';
import { DropdownComponent } from '../components/ui-components/drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
import { NavigationComponent } from '../components/ui-components/vertical-navbar/vartical-navbar.component'
import { VisitorComponent } from '../components/ui-components/visitor/visitor.component';
import { ReportComponent } from '../components/ui-components/report/report.component';
import { from } from 'rxjs';

const componentDeclarations = [ DataTableComponent, CardComponent, DropdownComponent, NavigationComponent, VisitorComponent, ReportComponent ];
const moduleDeclarations = [ CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatIconModule, MatCardModule, MatToolbarModule, MatListModule, MatSidenavModule, MatSelectModule, MatSnackBarModule,
  MatGridListModule, MatDatepickerModule, MatNativeDateModule, RouterModule ];

@NgModule( {
  declarations: [ ...componentDeclarations ],
  imports: [ ...moduleDeclarations ],
  exports: [ ...moduleDeclarations, ...componentDeclarations ]
} )
export class MaterialModule { }
