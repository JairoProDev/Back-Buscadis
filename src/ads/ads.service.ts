// src/ads/ads.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';

export interface Ad {
  id: string;
  titulo: string;
  descripcion: string;
  usuarioId: string;
  contacto: string;
  estado: string;
  categoriaId: string;
}

@Injectable()
export class AdsService {
  private ads: Ad[] = [];
  private idCounter = 1;

  async createAd(data: CreateAdDto): Promise<Ad> {
    const newAd: Ad = {
      id: this.idCounter.toString(),
      ...data,
      contacto: 'default_contact',
      estado: 'ACTIVO',
      categoriaId: '1', // Asegúrate de manejar categorías adecuadamente
    };
    this.ads.push(newAd);
    return newAd;
  }

  async getAdById(id: string): Promise<Ad> {
    const ad = this.ads.find(a => a.id === id);
    if (!ad) {
      throw new NotFoundException(`Ad with ID ${id} not found`);
    }
    return ad;
  }

  async searchAdsByTitle(title: string): Promise<Ad[]> {
    return this.ads.filter(ad =>
      ad.titulo.toLowerCase().includes(title.toLowerCase()),
    );
  }

  // Implementa otros métodos CRUD según tus necesidades
}