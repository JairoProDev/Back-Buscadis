import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as MongoPrismaClient } from '../../prisma/generated/mongo';
import * as path from 'path';

@Injectable()
export class PrismaMongoService
  extends MongoPrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        mongodb: {
          url: process.env.MONGODB_URL,
        },
      },
    });

    // Asegurar la correcta ubicación del cliente generado
    const prismaPath = path.resolve(__dirname, '../../prisma/generated/mongo');
    // Puedes implementar lógica adicional si es necesario
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}