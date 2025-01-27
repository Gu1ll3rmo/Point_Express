import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn()
  id_pago: number;

  @Column()
  id_pedido: number;

  @Column({ length: 50 })
  metodo_pago: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pago: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto: number;
}
