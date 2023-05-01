import { Controller, Get, Param } from '@nestjs/common';
import { MiembrosService } from 'src/services/miembros.service';

@Controller('miembros')
export class MiembrosController {
  constructor(private miembrosService: MiembrosService) {}

  @Get()
  obtenerMiembros(): object {
    return this.miembrosService.obtenerMiembros();
  }
  @Get(':id')
  obtenerMiembroEspecifico(@Param('id') id: number): object {
    return this.miembrosService.obtenerMiembroEspecifico(id);
  }
}
