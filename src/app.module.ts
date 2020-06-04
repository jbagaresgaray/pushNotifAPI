import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { UsersModule } from './modules/Users/Users.module';
import { NotificationsModule } from './modules/Notifications/Notifications.module';

import { environment } from './environments/environment';
import firebaseConfig from './config/firebaseConfig';

export const path = join(__dirname, '..', '..', 'client', 'dist');
console.log('path: ', path);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [firebaseConfig],
    }),
    MongooseModule.forRoot(environment.mongoUrl),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist', 'client'),
      serveStaticOptions: {
        index: false,
      },
      exclude: ['/api*'],
    }),
    UsersModule,
    NotificationsModule,
  ],
})
export class AppModule {}
