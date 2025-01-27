import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('detallepedidos')
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id_detalle: number;

  @Column()
  id_pedido: number;

  @Column()
  id_producto: number;

  @Column()
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;
}
