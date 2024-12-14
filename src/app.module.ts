import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaPostgresService } from './prisma/prisma.postgres.service';
import { PrismaMongoService } from './prisma/prisma.mongo.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que esté disponible en toda la app
    }),
  ],
  providers: [PrismaPostgresService, PrismaMongoService],
  exports: [PrismaPostgresService, PrismaMongoService],
})
export class AppModule {}
