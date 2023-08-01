import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const frontEndURL = 'https://consultorio-alpha.vercel.app';

  app.enableCors({
    origin: frontEndURL,
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ? Number(process.env.PORT) : 3333;

  await app.listen(port, '0.0.0.0').then(() => {
    console.log(`🚀 HTTP server running at -> ${port}`);
  });
}
bootstrap();
