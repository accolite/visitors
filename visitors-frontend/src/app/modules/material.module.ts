/**
 * 
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * 
 * Gives the flexibility to add all Material elements inside this module  
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule, MatIconModule
} from '@angular/material';
import { DataTableComponent } from '../components/ui-components/data-table/data-table.component';
import { CardComponent } from '../components/ui-components/card/card.component';

const componentDeclarations = [ DataTableComponent, CardComponent ]

@NgModule( {
  declarations: [ ...componentDeclarations ],
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
    MatIconModule, MatCardModule ],
  exports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatCardModule,
    MatIconModule, ...componentDeclarations ]
} )

export class MaterialModule { }