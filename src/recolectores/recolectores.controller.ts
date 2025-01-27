import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RecolectoresService } from './recolectores.service';
import { Recolector } from './entities/recolectore.entity';

@Controller('recolectores')
export class RecolectoresController {
  constructor(private readonly recolectoresService: RecolectoresService) {}

  @Get()
  findAll(): Promise<Recolector[]> {
    return this.recolectoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Recolector> {
    return this.recolectoresService.findOne(id);
  }

  @Post()
  create(@Body() recolector: Recolector): Promise<Recolector> {
    return this.recolectoresService.create(recolector);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() recolector: Recolector): Promise<Recolector> {
    return this.recolectoresService.update(id, recolector);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.recolectoresService.remove(id);
  }
}
