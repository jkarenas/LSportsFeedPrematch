import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransformersService } from './transformers.service';
import {LSportsDto } from '../DTOS/lsportsDTO';
import { InbbetsDto } from '../DTOS/inbbetsDTOS';

@Controller('transform')
export class TransformersController {
  constructor(private readonly transformersService: TransformersService) {}

  @Post('lepost')
  transform(@Body() lsportsData: LSportsDto): InbbetsDto {
    console.log('Received data:', lsportsData);
    const result = this.transformersService.transformLSportsToInbbets(lsportsData);
    console.log('Transformed data:', result);
    return result;
    
  }

  @Get()
  testEndpoint(): string {
    console.log('Received data: fake', LSportsDto);
    return 'Endpoint working!';
  }


}
