import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../schema/Users.schema';
import { UsersDTO } from '../interfaces/Users.interface';
import { Notifications } from '../../Notifications/schema/Notifications.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<Users>,
    @InjectModel(Notifications.name)
    private notificationsModel: Model<Notifications>,
  ) {}

  async create(createUserDTO: UsersDTO): Promise<Users> {
    const createdCat = new this.usersModel(createUserDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async findById(userId): Promise<Users> {
    return this.usersModel.findById(userId).exec();
  }

  async deleteById(userId): Promise<Users> {
    return this.usersModel.findByIdAndDelete(userId).exec();
  }

  async updateById(userId, updateUserDto: UsersDTO): Promise<Users> {
    return this.usersModel.findByIdAndUpdate(userId, updateUserDto).exec();
  }

  async getDeviceNotifications(userId) {
    return this.notificationsModel
      .find({
        userId,
      })
      .exec();
  }
}
