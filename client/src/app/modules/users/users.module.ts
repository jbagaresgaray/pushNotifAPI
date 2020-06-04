import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
// import { NgxDialogsModule } from 'ngx-dialogs';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedComponentsModule } from '../../shared/components/shared.components.module';
import { SendNotificationsComponent } from './send-notifications/send-notifications.component';

@NgModule({
  declarations: [UsersComponent, SendNotificationsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedComponentsModule,
    BsDropdownModule,
    ModalModule,
    FormsModule,
    // NgxDialogsModule,
  ],
  entryComponents: [SendNotificationsComponent],
})
export class UsersModule {}
