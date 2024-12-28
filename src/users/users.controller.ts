// src/users/users.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}