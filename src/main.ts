import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface';
import * as fs from 'fs'

async function bootstrap() {
  const httpsOptions: HttpsOptions = {
    key: fs.readFileSync(__dirname + '/../ssl/privkey.pem'),
    cert: fs.readFileSync(__dirname + '/../ssl/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });

  app.enableCors({
    exposedHeaders: '*',
    allowedHeaders: '*',
    origin: '*'
  });
  
  await app.listen(444);
}

require('dotenv').config();

bootstrap();
