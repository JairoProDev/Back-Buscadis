// src/ads/ads.controller.ts

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AdsService, Ad } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post()
  async createAd(@Body() adData: CreateAdDto): Promise<Ad> {
    return this.adsService.createAd(adData);
  }

  @Get(':id')
  async getAdById(@Param('id') id: string): Promise<Ad> {
    return this.adsService.getAdById(id);
  }

  @Get('search/:title')
  async searchAdsByTitle(@Param('title') title: string): Promise<Ad[]> {
    return this.adsService.searchAdsByTitle(title);
  }

  // Implementa otros endpoints según tus necesidades
}