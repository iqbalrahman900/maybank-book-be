// src/main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
    .setTitle('E-Books API')
    .setDescription('The E-Books API description')
    .setVersion('1.0')
    .addTag('books')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();