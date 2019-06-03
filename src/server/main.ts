import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as express from 'express'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  const PORT = process.env.PORT || 4201
  app.enableCors()
  app.use('/venvan', express.static(join(__dirname, '../../dist/venvan-web/')))

  await app.listen(PORT)
}
bootstrap()
