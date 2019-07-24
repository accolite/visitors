import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-visit-summary',
  templateUrl: './visit-summary.component.html',
  styleUrls: ['./visit-summary.component.css']
})
export class VisitSummaryComponent implements OnInit {
  @Input() data: any;

  dataSource: MatTableDataSource<any>;

  visitSummary = [];

  displayedColumns = [
    'badgeNo', 'contactPerson', 'inTime', 'outTime', 'officeLocation', 'purpose', 'scheduledTime',
    'status', 'visitNumber'
  ];

  constructor() { }

  ngOnInit() {
    this.visitSummary = this.data.visitSummary || [];
    this.dataSource = new MatTableDataSource(this.visitSummary);
  }

}
