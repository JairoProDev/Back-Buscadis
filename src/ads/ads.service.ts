import { Injectable } from '@nestjs/common';
import { PrismaMongoService } from '../prisma/prisma.mongo.service';

@Injectable()
export class AdsService {
  constructor(private readonly prisma: PrismaMongoService) {}

  async createAd(data: { titulo: string; descripcion: string; usuarioId: number }) {
    return this.prisma.adiso.create({
      data,
    });
  }

  async getAdById(id: string) {
    return this.prisma.adiso.findUnique({
      where: { id },
    });
  }

  async searchAdsByTitle(title: string) {
    return this.prisma.adiso.findMany({
      where: {
        titulo: { contains: title, mode: 'insensitive' },
      },
    });
  }
}
