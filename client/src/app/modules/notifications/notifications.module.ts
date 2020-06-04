import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgxDialogsModule } from 'ngx-dialogs';
import { FormsModule } from '@angular/forms';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { SharedComponentsModule } from '../../shared/components/shared.components.module';
import { ViewNotificationsComponent } from './view-notifications/view-notifications.component';


@NgModule({
  declarations: [NotificationsComponent, ViewNotificationsComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedComponentsModule,
    BsDropdownModule,
    ModalModule,
    FormsModule,
    // NgxDialogsModule,
  ],
  entryComponents: [ViewNotificationsComponent],
})
export class NotificationsModule {}
