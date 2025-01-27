import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entrega } from './entities/entregas.entity';

@Injectable()
export class EntregasService {
  constructor(
    @InjectRepository(Entrega)
    private readonly entregaRepository: Repository<Entrega>,
  ) {}

  findAll(): Promise<Entrega[]> {
    return this.entregaRepository.find();
  }

  findOne(id: number): Promise<Entrega> {
    return this.entregaRepository.findOneBy({ id_entrega: id });
  }

  create(entrega: Entrega): Promise<Entrega> {
    return this.entregaRepository.save(entrega);
  }

  async update(id: number, entrega: Entrega): Promise<Entrega> {
    await this.entregaRepository.update(id, entrega);
    return this.entregaRepository.findOneBy({ id_entrega: id });
  }

  async remove(id: number): Promise<void> {
    await this.entregaRepository.delete(id);
  }
}
