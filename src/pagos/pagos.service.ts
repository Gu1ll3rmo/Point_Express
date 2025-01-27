import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,
  ) {}

  findAll(): Promise<Pago[]> {
    return this.pagoRepository.find();
  }

  findOne(id: number): Promise<Pago> {
    return this.pagoRepository.findOneBy({ id_pago: id });
  }

  create(pago: Pago): Promise<Pago> {
    return this.pagoRepository.save(pago);
  }

  async update(id: number, pago: Pago): Promise<Pago> {
    await this.pagoRepository.update(id, pago);
    return this.pagoRepository.findOneBy({ id_pago: id });
  }

  async remove(id: number): Promise<void> {
    await this.pagoRepository.delete(id);
  }
}
