import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notifications } from '../schema/Notifications.schema';
import { NotificationsDTO } from '../interfaces/Notifications.interface';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notifications.name)
    private notificationsModel: Model<Notifications>,
  ) {}

  async create(createNotifDto: NotificationsDTO): Promise<Notifications> {
    const createdCat = new this.notificationsModel(createNotifDto);
    return createdCat.save();
  }

  async findAll(): Promise<Notifications[]> {
    return this.notificationsModel.find().exec();
  }

  async findById(userId): Promise<Notifications> {
    return this.notificationsModel.findById(userId).exec();
  }

  async deleteById(userId): Promise<Notifications> {
    return this.notificationsModel.findByIdAndDelete(userId).exec();
  }

  async updateById(
    userId,
    updateNotifDto: NotificationsDTO,
  ): Promise<Notifications> {
    return this.notificationsModel
      .findByIdAndUpdate(userId, updateNotifDto)
      .exec();
  }
}
