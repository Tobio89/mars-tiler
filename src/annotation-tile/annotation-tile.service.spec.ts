import { Test, TestingModule } from '@nestjs/testing';
import { AnnotationTileService } from './annotation-tile.service';

describe('AnnotationTileService', () => {
  let service: AnnotationTileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnotationTileService],
    }).compile();

    service = module.get<AnnotationTileService>(AnnotationTileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
