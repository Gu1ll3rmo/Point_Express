import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from './entities/pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pedido> {
    return this.pedidosService.findOne(id);
  }

  @Post()
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidosService.create(pedido);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidosService.update(id, pedido);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pedidosService.remove(id);
  }
}
