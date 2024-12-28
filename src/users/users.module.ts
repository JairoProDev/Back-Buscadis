// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, PrismaPostgresService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
