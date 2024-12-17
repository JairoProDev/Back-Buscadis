import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaPostgresService } from './prisma/prisma.postgres.service';
import { PrismaMongoService } from './prisma/prisma.mongo.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que esté disponible en toda la app
    }),
    UsersModule,
    PrismaModule,
    AuthModule,
  ],
  providers: [PrismaPostgresService, PrismaMongoService],
  exports: [PrismaPostgresService, PrismaMongoService],
})
export class AppModule {}
