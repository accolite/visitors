/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * 
 * Gives Flexibility to create Material Dropdown component
 */

import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component( {
  selector: 'drop-down',
  templateUrl: 'drop-down.component.html',
  styleUrls: [ 'drop-down.component.css' ]
} )


export class DropdownComponent {

  @Input()
  data: Array<any>;

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  selectedValue: string;

  @Output()
  selectedValueChange: EventEmitter<any> = new EventEmitter<any>();

  emitChanges() {
    this.selectedValueChange.emit( this.selectedValue );
  }

}