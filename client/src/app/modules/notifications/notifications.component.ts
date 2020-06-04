import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ngxalert } from 'ngx-dialogs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<any[]>;
  simpleAlert: any = new Ngxalert();

  constructor(private notifService: NotificationsService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.notifications$ = this.notifService
      .loadAllNotifications()
      .pipe(catchError(() => of([])));
  }

  deleteNotif(notif: any) {
    this.simpleAlert.create({
      id: notif._id,
      title: 'Delete Notification',
      message: 'Are you sure to delete this notification?',
      confirm: () => {
        this.notifService
          .deleteNotificationById(notif._id)
          .subscribe((res: any) => {
            if (res && res.success) {
              this.loadUsers();
              this.simpleAlert.removeAlert(notif._id);
              alert(res.message);
            }
          });
      },
    });
  }
}
