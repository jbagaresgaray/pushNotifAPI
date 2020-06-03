import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './modules/App/app.controller';
import { AppService } from './services/app.service';

import { UsersModule } from './modules/Users/Users.module';
import { NotificationsModule } from './modules/Notifications/Notifications.module';

import { environment } from './environments/environment';
import firebaseConfig from './config/firebaseConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [firebaseConfig],
    }),
    MongooseModule.forRoot(environment.mongoUrl),
    UsersModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
