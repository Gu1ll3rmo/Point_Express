import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column()
  id_usuario: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pedido: Date;

  @Column({ length: 50, default: 'pendiente' })
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;
}
