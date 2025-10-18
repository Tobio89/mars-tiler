import {
  Controller,
  Get,
  NotFoundException,
  Param,
  StreamableFile,
} from '@nestjs/common';
import { TilesService } from './tiles.service';
import { createReadStream } from 'fs';

@Controller('tiles/:image_name/:z/:coords')
export class TilesController {
  constructor(private readonly tilesService: TilesService) {}

  @Get()
  getTile(
    @Param('image_name') image_name: string,
    @Param('z') z: number,
    @Param('coords') coords: string,
  ): StreamableFile {
    if (image_name === 'base_files' || image_name === 'annotated_files') {
      const image_type = image_name === 'base_files' ? 'base' : 'annotated';
      const tilePath = this.tilesService.getTilePath(image_type, z, coords);
      const file = createReadStream(tilePath);
      return new StreamableFile(file);
    }
    throw new NotFoundException('Invalid image name');
  }
}
