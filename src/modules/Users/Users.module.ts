import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './controllers/Users.controller';
import { UsersService } from './services/Users.service';
import { Users, UsersSchema } from './schema/Users.schema';
import { NotificationsService } from '../Notifications/services/Notifications.service';
import {
  Notifications,
  NotificationsSchema,
} from '../Notifications/schema/Notifications.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema },
      { name: Notifications.name, schema: NotificationsSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, NotificationsService],
})
export class UsersModule {}
