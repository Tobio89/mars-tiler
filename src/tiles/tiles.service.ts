import { Injectable } from '@nestjs/common';
import path from 'path';

const base_layer_path = path.join(process.cwd(), 'assets', 'mars-d4', 'base');
const annotation_layer_path = path.join(
  process.cwd(),
  'assets',
  'mars-d4',
  'annotated',
);

@Injectable()
export class TilesService {
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

  getTilePath(image_type: 'base' | 'annotated', z: number, coords: string) {
    const { x, y } = this.getCoordsFromString(coords);
    const tile_file_name =
      image_type === 'base'
        ? this.makeBaseTileFileName(z, x, y)
        : this.makeAnnotatedTileFileName(z, x, y);

    const tile_folder =
      image_type === 'base' ? base_layer_path : annotation_layer_path;

    return path.join(tile_folder, tile_file_name);
  }

  getMetadataPath(image_type: 'base' | 'annotated') {
    const folder_path =
      image_type === 'base' ? base_layer_path : annotation_layer_path;
    return path.join(folder_path, 'metadata.xml');
  }
}
