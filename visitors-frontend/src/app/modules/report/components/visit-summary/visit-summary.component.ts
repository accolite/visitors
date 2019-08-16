import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-visit-summary',
  templateUrl: './visit-summary.component.html',
  styleUrls: ['./visit-summary.component.css']
})
export class VisitSummaryComponent implements OnInit {
  @Input() data: any;

  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    'badgeNo', 'contactPerson', 'inTime', 'outTime', 'officeLocation', 'purpose', 'scheduledTime',
    'status', 'visitNumber'
  ];

  constructor(private visitService: VisitorService) { }

  ngOnInit() {
    const emailId: string = this.data.emailId || '';
    if (emailId.length > 0) {
      this.visitService.searchVisitor({ 'emailId': emailId }, 0, 500).subscribe((resp: any) => {
        const total: number = resp.total || 0;
        if (total > 0) {
          const visitSummary: Array<any> = [];
          for (let i = 0; i < total; i++) {
            visitSummary.push(resp.data[i].visitSummary);
          }
          this.dataSource = new MatTableDataSource(visitSummary);
        }
      });
    }
  }

}
