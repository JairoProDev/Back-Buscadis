import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaPostgresService } from '../prisma/prisma.postgres.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, PrismaPostgresService],
  exports: [AuthService],
})
export class AuthModule {}
