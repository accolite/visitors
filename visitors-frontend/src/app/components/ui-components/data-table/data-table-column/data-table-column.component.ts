import { Component, Input, SimpleChanges } from '@angular/core';

@Component( {
  selector: 'data-table-column',
  templateUrl: 'data-table-column.component.html',
  styleUrls: [ 'data-table-column.component.css' ]
} )

export class DataTableColumnComponent {
  @Input()
  id: string;

  @Input()
  title: string;

  ngOnChanges( changes: SimpleChanges ) {
    console.log( changes )
  }
}