import { Injectable } from '@nestjs/common';
import path from 'path';

@Injectable()
export class TilesService {

  public validImageType = ['base', 'annotated', 'annotated-v2']

  public getLayerPath(image_type: string) {
    return path.join(
      process.cwd(),
      'assets',
      'mars-d4',
      image_type,
    );
  }

  private getCoordsFromString(coords: string) {
    const coordsOnly = coords.replace('.png', '');
    const [y, x] = coordsOnly.split('_');
    return { x, y };
  }

  private makeBaseTileFileName(z: number, x: string, y: string) {
    return `mars-d4-base_${z}_${x}_${y}.png`;
  }

  private makeAnnotatedTileFileName(z: number, x: string, y: string) {
    return `mars-d4-annotated_${z}_${x}_${y}.png`;
  }

  getTilePath(image_type: string, z: number, coords: string) {
    const { x, y } = this.getCoordsFromString(coords);
    const tile_file_name =
      image_type === 'base'
        ? this.makeBaseTileFileName(z, x, y)
        : this.makeAnnotatedTileFileName(z, x, y);

    const tile_folder = this.getLayerPath(image_type)

    return path.join(tile_folder, tile_file_name);
  }

  getMetadataPath(image_type: string) {
    const folder_path = this.getLayerPath(image_type)
    return path.join(folder_path, 'metadata.xml');
  }
}
