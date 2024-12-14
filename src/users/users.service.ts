import { Injectable } from '@nestjs/common';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaPostgresService) {}

  async createUser(data: {
    nombre: string;
    email: string;
    password: string;
    tipo: string;
  }) {
    return this.prisma.usuario.create({
      data,
    });
  }

  async getUserById(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async getAllUsers() {
    return this.prisma.usuario.findMany();
  }
}
