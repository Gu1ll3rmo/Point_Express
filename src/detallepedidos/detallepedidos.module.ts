import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedido } from './entities/detallepedido.entity';
import { DetallePedidosService } from './detallepedidos.service'; // Corregir nombre de importación
import { DetallePedidosController } from './detallepedidos.controller'; // Corregir nombre de importación

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido])],
  controllers: [DetallePedidosController], // Corregir nombre de importación
  providers: [DetallePedidosService], // Corregir nombre de importación
})
export class DetallePedidosModule {}
