import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post()
  async createAd(@Body() adData: { titulo: string; descripcion: string; usuarioId: string; }) {
    return this.adsService.createAd(adData);
  }

  @Get(':id')
  async getAdById(@Param('id') id: string) { // Asegurado que id es string
    return this.adsService.getAdById(id);
  }

  @Get()
  async searchAdsByTitle(@Param('title') title: string) {
    return this.adsService.searchAdsByTitle(title);
  }
}