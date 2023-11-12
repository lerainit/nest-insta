import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false,cors:false});
  app.enableCors()
  const PORT = process.env.PORT || 5002
  await app.listen(PORT,()=> console.log('listen on port 5002'));
}
bootstrap();
