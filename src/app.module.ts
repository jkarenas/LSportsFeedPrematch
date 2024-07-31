import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransformersModule } from './transformers/transformers.module';

@Module({
  imports: [TransformersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
