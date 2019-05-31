import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as path from 'path'
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  const PORT = process.env.PORT || 3000
  app.use('/', express.static(path.join(__dirname, '../../dist/venvan-web')))
  app.enableCors()
  await app.listen(PORT)
}
bootstrap()
