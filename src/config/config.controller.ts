import { Controller, Get } from '@nestjs/common';
import visConfig from '../../assets/config/visualizationConfig.json';

@Controller('config')
export class ConfigController {
  @Get()
  getLocaleData(): object {
    return visConfig;
  }
}
