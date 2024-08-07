import { Controller, Get, Post } from '@nestjs/common';
import { TransformersService } from './transformers.service';
import { InbbetsDto } from '../DTOS/inbbetsDTOS';

@Controller('transform')
export class TransformersController {
  constructor(private readonly transformersService: TransformersService) {}

  @Post('LsportsToInbbets')
  async transform(): Promise<InbbetsDto> {
    console.log('Fetching data from LSports endpoint...');
    const lsportsData = await this.transformersService.fetchDataFromEndpoint();
    console.log('Received data:', lsportsData);
    const result = this.transformersService.transformLSportsToInbbets(lsportsData);
    console.log('Transformed data:', result);
    return result;
  }

  @Get()
  testEndpoint(): string {
    return 'Endpoint working!';
  }
}
