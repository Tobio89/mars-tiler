import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import marsLocaleData from '../../assets/data/marsLocaleData.json';

@Controller('data')
export class DataController {
  @Get(':data_category')
  getLocaleData(@Param('data_category') data_category: string): object {
    if (data_category === 'mountains') {
      return marsLocaleData['mountains'];
    }

    if (data_category === 'missionSites') {
      return marsLocaleData['missionSites'];
    }
    throw new NotFoundException('Invalid data category');
  }
}
