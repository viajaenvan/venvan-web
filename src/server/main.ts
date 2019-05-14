import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as path from 'path'
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use('/smartcom', express.static(path.join(__dirname, '../../dist')))
  app.enableCors()
  await app.listen(3000)
}
bootstrap()
