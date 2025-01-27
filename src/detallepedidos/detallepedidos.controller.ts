import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DetallePedidosService } from './detallepedidos.service';
import { DetallePedido } from './entities/detallepedido.entity';

@Controller('detallepedidos')
export class DetallePedidosController {
  constructor(private readonly detallePedidosService: DetallePedidosService) {}

  @Get()
  findAll(): Promise<DetallePedido[]> {
    return this.detallePedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<DetallePedido> {
    return this.detallePedidosService.findOne(id);
  }

  @Post()
  create(@Body() detallePedido: DetallePedido): Promise<DetallePedido> {
    return this.detallePedidosService.create(detallePedido);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() detallePedido: DetallePedido): Promise<DetallePedido> {
    return this.detallePedidosService.update(id, detallePedido);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.detallePedidosService.remove(id);
  }
}
