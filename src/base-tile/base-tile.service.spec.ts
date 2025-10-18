import { Test, TestingModule } from '@nestjs/testing';
import { BaseTileService } from './base-tile.service';

describe('BaseTileService', () => {
  let service: BaseTileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseTileService],
    }).compile();

    service = module.get<BaseTileService>(BaseTileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
