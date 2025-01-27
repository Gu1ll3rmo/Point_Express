import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { Pago } from './entities/pago.entity';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Get()
  findAll(): Promise<Pago[]> {
    return this.pagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pago> {
    return this.pagosService.findOne(id);
  }

  @Post()
  create(@Body() pago: Pago): Promise<Pago> {
    return this.pagosService.create(pago);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pago: Pago): Promise<Pago> {
    return this.pagosService.update(id, pago);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pagosService.remove(id);
  }
}
