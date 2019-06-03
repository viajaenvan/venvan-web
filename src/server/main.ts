import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import * as express from 'express'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true })
  const PORT = process.env.PORT || 4201

  if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(join(process.cwd(), 'dist/venvan-web')))
  }

  app.enableCors()
  await app.listen(PORT)
}
bootstrap()
