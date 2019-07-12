/**
 * 
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * 
 * Gives the flexibility to add all Material elements inside this module  
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DataTableComponent } from '../components/ui-components/data-table/data-table.component';
import { DataTableColumnComponent } from '../components/ui-components/data-table/data-table-column/data-table-column.component';

@NgModule( {
  declarations: [ DataTableComponent, DataTableColumnComponent ],
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule ],
  exports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule, DataTableComponent, DataTableColumnComponent ]
} )

export class MaterialModule { }