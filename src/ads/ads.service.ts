import { Injectable } from '@nestjs/common';
import { PrismaMongoService } from '../prisma/prisma.mongo.service';

@Injectable()
export class AdsService {
  constructor(private readonly prisma: PrismaMongoService) {}

  async createAd(data: {
    titulo: string;
    descripcion: string;
    usuarioId: number;
  }) {
    return this.prisma.adiso.create({
      data: {
        titulo: data.titulo,
        descripcion: data.descripcion,
        usuario: { connect: { id: data.usuarioId } },
        contacto: 'default_contact', // Añadir contacto
        estado: 'ACTIVO', // Añadir estado
        categoria: { connect: { id: 1 } }, // Añadir categoría (ejemplo)
      },
    });
  }

  async getAdById(id: number) {
    return this.prisma.adiso.findUnique({
      where: { id },
    });
  }

  async searchAdsByTitle(title: string) {
    return this.prisma.adiso.findMany({
      where: {
        titulo: {
          contains: title,
          mode: 'insensitive',
        },
      },
    });
  }
}
