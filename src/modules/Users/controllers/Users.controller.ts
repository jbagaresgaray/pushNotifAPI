import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Response } from 'express';

import { UsersService } from '../services/Users.service';
import { UsersDTO } from '../interfaces/Users.interface';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: UsersDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createUserDTO: UsersDTO, @Res() res: Response) {
    const resps = await this.usersService.create(createUserDTO);
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
    const resps = await this.usersService.findAll();
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
    const resps = await this.usersService.findById(userId);
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
    type: UsersDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteById(@Param('id') userId, @Res() res: Response) {
    const resps = await this.usersService.deleteById(userId);
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
    type: UsersDTO,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateById(
    @Param('id') userId,
    @Body() updateUserDTO: UsersDTO,
    @Res() res: Response,
  ) {
    const resps = await this.usersService.updateById(userId, updateUserDTO);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'The record has been successfully updated.',
      data: resps,
    });
  }

  @Get(':userId/notifications')
  @ApiParam({ name: 'userId', required: true })
  @ApiResponse({
    status: 201,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getDeviceNotifications(@Param('userId') userId, @Res() res: Response) {
    const resps = await this.usersService.getDeviceNotifications(userId);
    return res.status(HttpStatus.OK).json({
      success: true,
      message: '',
      data: resps,
    });
  }
}
