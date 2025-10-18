import { Controller } from '@nestjs/common';

@Controller('base-tile/:tile_params')
export class BaseTileController {}

@Controller('base-tile/metadata.xml')
export class BaseTileMetadataController {}
