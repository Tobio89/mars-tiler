import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseTileController } from './base-tile/base-tile.controller';
import { AnnotationTileController } from './annotation-tile/annotation-tile.controller';
import { BaseTileModule } from './base-tile/base-tile.module';
import { AnnotationTileModule } from './annotation-tile/annotation-tile.module';
import { BaseTileService } from './base-tile/base-tile.service';
import { AnnotationTileService } from './annotation-tile/annotation-tile.service';

@Module({
  imports: [BaseTileModule, AnnotationTileModule],
  controllers: [AppController, BaseTileController, AnnotationTileController],
  providers: [AppService, BaseTileService, AnnotationTileService],
})
export class AppModule {}
