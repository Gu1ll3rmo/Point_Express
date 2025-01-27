import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recolector } from './entities/recolectore.entity';

@Injectable()
export class RecolectoresService {
  constructor(
    @InjectRepository(Recolector)
    private readonly recolectorRepository: Repository<Recolector>,
  ) {}

  findAll(): Promise<Recolector[]> {
    return this.recolectorRepository.find();
  }

  findOne(id: number): Promise<Recolector> {
    return this.recolectorRepository.findOneBy({ id_recolector: id });
  }

  create(recolector: Recolector): Promise<Recolector> {
    return this.recolectorRepository.save(recolector);
  }

  async update(id: number, recolector: Recolector): Promise<Recolector> {
    await this.recolectorRepository.update(id, recolector);
    return this.recolectorRepository.findOneBy({ id_recolector: id });
  }

  async remove(id: number): Promise<void> {
    await this.recolectorRepository.delete(id);
  }
}
