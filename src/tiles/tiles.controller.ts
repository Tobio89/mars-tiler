import {
  Controller,
  Get,
  NotFoundException,
  Param,
  StreamableFile,
} from '@nestjs/common';
import { TilesService } from './tiles.service';
import { createReadStream } from 'fs';

@Controller('tiles')
export class TilesController {
  constructor(private readonly tilesService: TilesService) {}

  @Get(':image_name/metadata.xml')
  getMetadata(@Param('image_name') image_name: string): StreamableFile {
    if (this.tilesService.validImageType.includes(image_name)) {
      const metadataFilePath = this.tilesService.getMetadataPath(image_name);
      const file = createReadStream(metadataFilePath);
      return new StreamableFile(file);
    }
    throw new NotFoundException(
      'Invalid image name: no metadata found for that image: ' + image_name,
    );
  }

  @Get(':image_name/:z/:coords')
  getTile(
    @Param('image_name') image_name: string,
    @Param('z') z: number,
    @Param('coords') coords: string,
  ): StreamableFile {
    const image_base_name = image_name.replace('_files', '');

    if (this.tilesService.validImageType.includes(image_base_name)) {
      const tilePath = this.tilesService.getTilePath(
        image_base_name,
        z,
        coords,
      );
      const file = createReadStream(tilePath);
      return new StreamableFile(file);
    }
    throw new NotFoundException(
      'Invalid image name: no tiles found for that image',
    );
  }
}
