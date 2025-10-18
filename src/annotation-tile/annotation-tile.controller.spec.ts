import { Test, TestingModule } from '@nestjs/testing';
import { AnnotationTileController } from './annotation-tile.controller';

describe('AnnotationTileController', () => {
  let controller: AnnotationTileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnotationTileController],
    }).compile();

    controller = module.get<AnnotationTileController>(AnnotationTileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
