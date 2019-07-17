/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * 
 * Gives Flexibility to create card component
 */


import { Component, Input, TemplateRef } from '@angular/core';

@Component( {
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: [ 'card.component.css' ]
} )

export class CardComponent {

  @Input()
  cardTitle: string;

  @Input()
  cardSubTitle: string;

  @Input()
  cardContent: TemplateRef<any>;

  enableFullScreen: boolean = false;

  expandCard: boolean = true;

}