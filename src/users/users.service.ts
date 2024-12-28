// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaPostgresService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.usuario.create({
      data: createUserDto,
    });
  }

  async findById(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.prisma.usuario.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async delete(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}