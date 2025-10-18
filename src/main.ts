import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env.CLIENT_APP_URL);

  const clientAppUrl = process.env.CLIENT_APP_URL ?? 'http://localhost:3000';

  app.enableCors({
    origin: clientAppUrl,
  });
  await app.listen(process.env.PORT ?? 4444);
}
bootstrap().catch(console.error);
