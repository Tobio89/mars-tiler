import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TilesController } from './tiles/tiles.controller';
import { TilesService } from './tiles/tiles.service';
import { ConfigModule } from '@nestjs/config';
import { DataController } from './data/data.controller';
import { DataService } from './data/data.service';
import { ConfigController } from './config/config.controller';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, TilesController, DataController, ConfigController],
  providers: [AppService, TilesService, DataService, ConfigService],
})
export class AppModule {}
