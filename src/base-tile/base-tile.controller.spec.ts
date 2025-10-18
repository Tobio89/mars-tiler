import { Test, TestingModule } from '@nestjs/testing';
import { BaseTileController } from './base-tile.controller';

describe('BaseTileController', () => {
  let controller: BaseTileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseTileController],
    }).compile();

    controller = module.get<BaseTileController>(BaseTileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
