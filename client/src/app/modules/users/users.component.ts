import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Ngxalert } from 'ngx-dialogs';

import { SendNotificationsComponent } from './send-notifications/send-notifications.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;
  modalRef: BsModalRef;
  simpleAlert: any = new Ngxalert();

  constructor(
    private userService: UsersService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.userService
      .loadAllUsers()
      .pipe(catchError(() => of([])));
  }

  loadPlatform(platform) {
    switch (platform) {
      case 'ios':
        return 'fab fa-lg fa-apple';
      case 'android':
        return 'fab fa-lg fa-android';
      case 'windows':
        return 'fab fa-lg fa-windows';
      case 'firefox':
        return 'fab fa-lg fa-firefox';
      case 'chrome':
        return 'fab fa-lg fa-chrome';
      case 'chrome':
        return 'fab fa-lg fa-safari';
      case 'opera':
        return 'fab fa-lg fa-opera';
      case 'linux':
        return 'fab fa-lg fa-linux';
      case 'ubuntu':
        return 'fab fa-lg fa-ubuntu';
    }
  }

  sendNotification(user: any) {
    const modalConfig: any = {
      animated: true,
      ignoreBackdropClick: true,
      backdrop: 'static',
      keyboard: true,
      class: 'modal-md',
      initialState: {
        deviceInfo: user,
      },
    };
    this.modalService.show(SendNotificationsComponent, modalConfig);
  }

  deleteUser(user: any) {
    this.simpleAlert.create({
      id: user._id,
      title: 'Delete Notification',
      message: 'Are you sure to delete this notification?',
      confirm: () => {
        this.userService.deleteUserById(user._id).subscribe((res: any) => {
          if (res && res.success) {
            this.loadUsers();
            this.simpleAlert.removeAlert(user._id);
            alert(res.message);
          }
        });
      },
    });
  }
}
