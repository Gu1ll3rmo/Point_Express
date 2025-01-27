import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entregas')
export class Entrega {
  @PrimaryGeneratedColumn()
  id_entrega: number;

  @Column()
  id_pedido: number;

  @Column()
  id_recolector: number;

  @Column({ type: 'text' })
  direccion_entrega: string;

  @Column({ type: 'datetime', nullable: true })
  fecha_entrega: Date;

  @Column({ length: 50, default: 'pendiente' })
  estado: string;
}
