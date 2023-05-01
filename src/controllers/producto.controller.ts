import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductoController {
  @Get()
  getPoducts(): string {
    return 'Hola, Mundo!';
  }
}
