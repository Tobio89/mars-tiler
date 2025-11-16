import { Test, TestingModule } from '@nestjs/testing';
import { StreamableFile } from '@nestjs/common';
import { TilesController } from './tiles.controller';
import { TilesService } from './tiles.service';

describe('TilesController', () => {
  let controller: TilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TilesService],
      controllers: [TilesController],
    }).compile();

    controller = module.get<TilesController>(TilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return metadata file stream for valid image name', () => {
    const imageName = 'base';

    const result = controller.getMetadata(imageName);
    expect(result).toBeInstanceOf(StreamableFile);
  });

  it('should throw NotFoundException for invalid image name in metadata', () => {
    const imageName = 'invalid_image';

    expect(() => controller.getMetadata(imageName)).toThrow(
      'Invalid image name: no metadata found for that image: ' + imageName,
    );
  });

  it('should return tile file stream for valid image name', () => {
    const imageName = 'base_files';
    const z = 0;
    const coords = '0_0';

    const result = controller.getTile(imageName, z, coords);
    expect(result).toBeInstanceOf(StreamableFile);
  });

  it('should throw NotFoundException for invalid image name in tile request', () => {
    const imageName = 'invalid_image_files';
    const z = 0;
    const coords = '0_0';

    expect(() => controller.getTile(imageName, z, coords)).toThrow(
      'Invalid image name: no tiles found for that image',
    );
  });
});
