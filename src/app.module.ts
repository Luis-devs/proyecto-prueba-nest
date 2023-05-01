import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiembrosController } from './controllers/miembros.controller';
import { ProductoController } from './controllers/producto.controller';
import { MiembrosService } from './services/miembros.service';

@Module({
  imports: [],
  controllers: [AppController, MiembrosController, ProductoController],
  providers: [AppService, MiembrosService],
})
export class AppModule {}
