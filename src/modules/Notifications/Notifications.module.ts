import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NotificationsController } from './controllers/Notifications.controller';
import { NotificationsService } from './services/Notifications.service';
import { PushNotificationsService } from '../../services/pushnotifications.service';
import {
  Notifications,
  NotificationsSchema,
} from './schema/Notifications.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notifications.name, schema: NotificationsSchema },
    ]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService, PushNotificationsService],
})
export class NotificationsModule {}
