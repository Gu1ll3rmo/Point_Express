import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './entities/notificacione.entity';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepository: Repository<Notificacion>,
  ) {}

  findAll(): Promise<Notificacion[]> {
    return this.notificacionRepository.find();
  }

  findOne(id: number): Promise<Notificacion> {
    return this.notificacionRepository.findOneBy({ id_notificacion: id });
  }

  create(notificacion: Notificacion): Promise<Notificacion> {
    return this.notificacionRepository.save(notificacion);
  }

  async update(id: number, notificacion: Notificacion): Promise<Notificacion> {
    await this.notificacionRepository.update(id, notificacion);
    return this.notificacionRepository.findOneBy({ id_notificacion: id });
  }

  async remove(id: number): Promise<void> {
    await this.notificacionRepository.delete(id);
  }
}
