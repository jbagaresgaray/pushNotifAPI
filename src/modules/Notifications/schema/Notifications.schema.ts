import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Notifications extends Document {
  @Prop()
  title: string;

  @Prop()
  message: string;

  @Prop()
  image: string;

  @Prop()
  notificationName: string;

  @Prop()
  data: any;

  @Prop()
  receiverToken: string;

  @Prop()
  created_at: string;

  @Prop()
  is_removed: boolean;

  @Prop()
  is_read: boolean;

  @Prop()
  userId: string;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
