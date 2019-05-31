import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as path from 'path'
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  const PORT = process.env.PORT || 3000
  const URL_STATIC = '../../dist'
  app.use('/', express.static(path.join(__dirname, URL_STATIC)))
  app.enableCors()
  await app.listen(PORT)
}
bootstrap()
