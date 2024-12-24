import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, PrismaPostgresService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
