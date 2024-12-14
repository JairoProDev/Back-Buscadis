import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body()
    userData: {
      nombre: string;
      email: string;
      password: string;
      tipo: string;
    },
  ) {
    return this.usersService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
}
