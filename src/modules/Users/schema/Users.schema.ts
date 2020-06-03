import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  platform: string;

  @Prop()
  modelName: string;

  @Prop()
  manufacturer: string;

  @Prop()
  uuid: string;

  @Prop()
  appVersion: string;

  @Prop()
  appBuild: string;

  @Prop()
  operatingSystem: string;

  @Prop()
  osVersion: string;

  @Prop()
  pushToken: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
