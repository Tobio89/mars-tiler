import { Test, TestingModule } from '@nestjs/testing';
import { TilesService } from './tiles.service';

describe('TilesService', () => {
  let service: TilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TilesService],
    }).compile();

    service = module.get<TilesService>(TilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.each(['base', 'annotated', 'annotated-v2'])(
    'should create valid path: getLayerPath(%s)',
    (image_type) => {
      const layerPath = service.getLayerPath(image_type);
      expect(layerPath).toContain(`assets/mars-d4/${image_type}`);
    },
  );

  it.each(['12_15.png', '0_0.png', '9999_1232.png'])(
    'should parse coords from string to object',
    (coords) => {
      const { x, y } = service.getCoordsFromString(coords);
      const [expectedY, expectedX] = coords.replace('.png', '').split('_');
      expect(x).toBe(expectedX);
      expect(y).toBe(expectedY);
    },
  );

  it.each(['base', 'annotated', 'annotated-v2'])(
    'should create valid metadata path: getMetadataPath(%s)',
    (image_type) => {
      const metadataPath = service.getMetadataPath(image_type);
      expect(metadataPath).toContain(
        `assets/mars-d4/${image_type}/metadata.xml`,
      );
    },
  );

  it.each(['base', 'annotated', 'annotated-v2'])(
    'should create valid tile path: getTilePath(%s, z, coords)',
    (image_type) => {
      const z = 5;
      const coords = '12_10.png';
      const tilePath = service.getTilePath(image_type, z, coords);
      expect(tilePath).toContain(`assets/mars-d4/${image_type}/`);
      expect(tilePath).toMatch(new RegExp(`_${z}_10_12.png`));
    },
  );
});
