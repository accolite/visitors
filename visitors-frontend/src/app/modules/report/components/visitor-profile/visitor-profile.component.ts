import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.css']
})
export class VisitorProfileComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
