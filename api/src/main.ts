import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './shared/config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [env.feDevURL, env.feProdURL],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ? Number(process.env.PORT) : 3333;

  await app.listen(port, '0.0.0.0').then(() => {
    console.log(`🚀 HTTP server running at -> ${port}`);
  });
}
bootstrap();
