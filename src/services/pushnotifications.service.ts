import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import * as admin from 'firebase-admin';

import firebaseConfig from '../config/firebaseConfig';

@Injectable()
export class PushNotificationsService {
  constructor(
    @Inject(firebaseConfig.KEY)
    private databaseConfig: ConfigType<typeof firebaseConfig>,
  ) {
    this.initPushNotification();
  }

  private initPushNotification() {
    const serviceAccount: any = this.databaseConfig;
    const defaultApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://taskspur-40cf0.firebaseio.com',
    });

    console.log('defaultApp: ', defaultApp.name); // '[DEFAULT]'
  }

  sendPushNotification(message: any) {
    const newMessage = {
      notification: {
        title: message._doc.title,
        body: message._doc.message,
        tag: 'notification',
        
      },
      data: {
        notification_id: message._doc._id.toString(),
        created_at: message._doc.created_at,
        is_removed: JSON.stringify(message._doc.is_removed),
        is_read: JSON.stringify(message._doc.is_read),
        userId: message._doc.userId,
        ...message._doc.data,
      },
      token: message.receiverToken,
    };
    console.log('newMessage: ', newMessage);

    const defaultMessaging = admin.messaging();
    defaultMessaging
      .send(newMessage)
      .then(response => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      })
      .catch(error => {
        console.log('Error sending message:', error);
      });
  }
}
