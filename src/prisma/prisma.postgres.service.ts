// src/prisma/prisma.postgres.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaPostgresService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super(); // Llama al cliente generado automáticamente
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}