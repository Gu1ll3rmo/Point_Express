import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './entities/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Producto> {
    return this.productosService.findOne(id);
  }

  @Post()
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.create(producto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() producto: Producto): Promise<Producto> {
    return this.productosService.update(id, producto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productosService.remove(id);
  }
}
