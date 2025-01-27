import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EntregasService } from './entregas.service';
import { Entrega } from './entities/entregas.entity';

@Controller('entregas')
export class EntregasController {
  constructor(private readonly entregasService: EntregasService) {}

  @Get()
  findAll(): Promise<Entrega[]> {
    return this.entregasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Entrega> {
    return this.entregasService.findOne(id);
  }

  @Post()
  create(@Body() entrega: Entrega): Promise<Entrega> {
    return this.entregasService.create(entrega);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() entrega: Entrega): Promise<Entrega> {
    return this.entregasService.update(id, entrega);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.entregasService.remove(id);
  }
}
