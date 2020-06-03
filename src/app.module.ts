import { Module } from '@nestjs/common';
import { AppController } from './modules/App/app.controller';
import { AppService } from './services/app.service';

import { UsersModule } from './modules/Users/Users.module';
import { NotificationsModule } from './modules/Notifications/Notifications.module';

import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    UsersModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
