import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NotificationsService } from '../../notifications/notifications.service';

@Component({
  selector: 'app-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.scss'],
})
export class SendNotificationsComponent implements OnInit {
  notificationObj: any = {};

  isSending: boolean;
  deviceInfo: any = {};

  constructor(
    public bsModalRef: BsModalRef,
    private notifService: NotificationsService,
  ) {
    this.isSending = false;
  }

  ngOnInit() {
    console.log('this.deviceInfo: ', this.deviceInfo);
  }

  sendNotification() {
    this.isSending = true;
    this.notificationObj.data = {};
    this.notificationObj.userId = this.deviceInfo.uuid;
    this.notificationObj.receiverToken = this.deviceInfo.pushToken;
    this.notificationObj.created_at = new Date().toISOString();

    console.log('notificationObj: ', this.notificationObj);
    this.notifService
      .createNotification(this.notificationObj)
      .subscribe(res => {
        console.log('createNotification: ', res);
        if (res && res.success) {
          this.isSending = false;
          alert(res.message);

          this.bsModalRef.hide();
        }
      });
  }
}
