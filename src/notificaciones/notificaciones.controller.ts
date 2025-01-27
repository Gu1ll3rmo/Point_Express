import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { Notificacion } from './entities/notificacione.entity';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}

  @Get()
  findAll(): Promise<Notificacion[]> {
    return this.notificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Notificacion> {
    return this.notificacionesService.findOne(id);
  }

  @Post()
  create(@Body() notificacion: Notificacion): Promise<Notificacion> {
    return this.notificacionesService.create(notificacion);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() notificacion: Notificacion): Promise<Notificacion> {
    return this.notificacionesService.update(id, notificacion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.notificacionesService.remove(id);
  }
}
