import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransformersModule } from './transformers/transformers.module';
import { DatabaseModule } from './databaseConfiguration/databaseConfiguration.module';
import { PersistenceModule } from './persistence/persistence.module';




@Module({
  imports: [TransformersModule,DatabaseModule, PersistenceModule],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
