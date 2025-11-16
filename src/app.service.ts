import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
    const port = process.env.PORT || '4444';

    return `Mars Tiler: running on port ${port}, listening at ${clientUrl}`;
  }
}
