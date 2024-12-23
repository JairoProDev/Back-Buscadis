import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as MongoPrismaClient } from '../../prisma/generated/mongo'; // Ruta corregida

@Injectable()
export class PrismaMongoService
  extends MongoPrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        mongodb: { // Cambiado de 'db' a 'mongodb'
          url: process.env.MONGODB_URL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() { // Implementación completa
    await this.$disconnect();
  }
}