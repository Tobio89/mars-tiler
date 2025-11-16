import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';

describe('DataController', () => {
  let controller: DataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
    }).compile();

    controller = module.get<DataController>(DataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return mountain data correctly', () => {
    const data = controller.getLocaleData('mountains');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  it('should return mission site data correctly', () => {
    const data = controller.getLocaleData('missionSites');
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  });

  it('should throw and error for unknown locale', () => {
    expect(() => controller.getLocaleData('unknown-locale')).toThrow();
  });
});
