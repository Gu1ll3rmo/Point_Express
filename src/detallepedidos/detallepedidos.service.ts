import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePedido } from './entities/detallepedido.entity';

@Injectable()
export class DetallePedidosService {
  constructor(
    @InjectRepository(DetallePedido)
    private readonly detallePedidoRepository: Repository<DetallePedido>,
  ) {}

  findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find();
  }

  findOne(id: number): Promise<DetallePedido> {
    return this.detallePedidoRepository.findOneBy({ id_detalle: id }); // Corregido el nombre
  }

  create(detallePedido: DetallePedido): Promise<DetallePedido> {
    return this.detallePedidoRepository.save(detallePedido);
  }

  async update(id: number, detallePedido: DetallePedido): Promise<DetallePedido> {
    await this.detallePedidoRepository.update(id, detallePedido);
    return this.detallePedidoRepository.findOneBy({ id_detalle: id }); // Corregido el nombre
  }

  async remove(id: number): Promise<void> {
    await this.detallePedidoRepository.delete(id);
  }
}
