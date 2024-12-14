import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post()
  async createAd(@Body() adData: { titulo: string; descripcion: string; usuarioId: number }) {
    return this.adsService.createAd(adData);
  }

  @Get(':id')
  async getAd(@Param('id') id: string) {
    return this.adsService.getAdById(id);
  }

  @Get('search')
  async searchAds(@Query('title') title: string) {
    return this.adsService.searchAdsByTitle(title);
  }
}
