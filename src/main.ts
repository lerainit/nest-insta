import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false,cors:false});
  app.enableCors()
  await app.listen(5002,()=> console.log('listen on port 5002'));
}
bootstrap();
