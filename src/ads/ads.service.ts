// filepath: /c:/Users/Usuario/Desktop/Startup-Buscadis/Back-Buscadis/src/ads/ads.service.ts

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
        usuario: { connect: { id: data.usuarioId.toString() } }, // Asegurar que el ID es string
        contacto: 'default_contact',
        estado: 'ACTIVO',
        categoria: { connect: { id: 1 } },
      },
    });
  }

  async getAdById(id: string) { // Cambiar tipo a string
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