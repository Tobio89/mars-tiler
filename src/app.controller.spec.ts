import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return correct startup message', () => {
      const hello = appController.getHello();
      expect(hello).toContain('Mars Tiler');
      expect(hello).toMatch(/running on port \d+/);
      expect(hello).toMatch(
        /listening at http:\/\/localhost:3000|listening at http:\/\/.+/,
      );
    });
  });
});
