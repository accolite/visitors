import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { ApprovedRequestComponent } from '../../home/approved-request/approved-request.component';
import { PendingRequestComponent } from '../../home/pending-request/pending-request.component';
import { PreApprovedRequestComponent } from '../../home/pre-approved-request/pre-approved-request.component';
import { NotificationModel } from 'src/app/helpers/models/notification.model';
import { RestService } from 'src/app/services/base/rest.service';

@Component( {
  selector: 'visitor-home',
  templateUrl: 'visitor-home.component.html',
  styleUrls: [ 'visitor-home.component.css' ],
} )
export class VisitorComponent {

  approved: ApprovedRequestComponent;
  pending: PendingRequestComponent;
  preApproved: PreApprovedRequestComponent;
  notificationData: NotificationModel;

  constructor( private notification: NotificationService, private restService: RestService ) { }

  showSnackbarAndRefreshData( data: NotificationModel ) {
    // console.clear();
    this.restService.createSnackbar( data.message, 'close', 2000, 'success', 'info' )
    switch ( data.action ) {
      case 'PENDING':
        this.pending.refreshData()
        break;
      case 'APPROVED':
        this.approved.refreshData();
        break;
      case 'SCHEDULED':
        this.preApproved.refreshData();
        break;
    }
  }

  ngAfterViewInit() {
    this.notification.messages$.subscribe( ( data ) => {
      this.notificationData = new NotificationModel( data );
      this.showSnackbarAndRefreshData( this.notificationData )
    } )
  }
}