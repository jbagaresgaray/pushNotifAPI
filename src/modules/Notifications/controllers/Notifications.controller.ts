import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Res,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Response } from 'express';

import { NotificationsService } from '../services/Notifications.service';
import { NotificationsDTO } from '../interfaces/Notifications.interface';
import { PushNotificationsService } from '../../../services/pushnotifications.service';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly notifService: NotificationsService,
    private readonly notifications: PushNotificationsService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: NotificationsDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() notifDTO: NotificationsDTO, @Res() res: Response) {
    notifDTO.is_read =
      notifDTO.is_read === undefined ? false : notifDTO.is_read;
    notifDTO.is_removed =
      notifDTO.is_removed === undefined ? false : notifDTO.is_removed;
    notifDTO.created_at = new Date().toISOString();

    const resps = await this.notifService.create(notifDTO);
    this.notifications.sendPushNotification(resps);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'The record has been successfully created',
      data: resps,
    });
  }

  @Get()
  @ApiResponse({
    status: 201,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll(@Res() res: Response) {
    const resps = await this.notifService.findAll();
    return res.status(HttpStatus.OK).json({
      success: true,
      message: '',
      data: resps,
    });
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 201,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findById(@Param('id') userId, @Res() res: Response) {
    const resps = await this.notifService.findById(userId);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: '',
      data: resps,
    });
  }

  @Delete(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
    type: NotificationsDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteById(@Param('id') userId, @Res() res: Response) {
    const resps = await this.notifService.deleteById(userId);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'The record has been successfully deleted.',
      data: resps,
    });
  }

  @Put(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully updated.',
    type: NotificationsDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateById(
    @Param('id') userId,
    @Body() updateUserDTO: NotificationsDTO,
    @Res() res: Response,
  ) {
    const resps = await this.notifService.updateById(userId, updateUserDTO);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'The record has been successfully updated.',
      data: resps,
    });
  }
}
