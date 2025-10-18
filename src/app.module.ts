import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TilesController } from './tiles/tiles.controller';
import { TilesService } from './tiles/tiles.service';

@Module({
  imports: [],
  controllers: [AppController, TilesController],
  providers: [AppService, TilesService],
})
export class AppModule {}
