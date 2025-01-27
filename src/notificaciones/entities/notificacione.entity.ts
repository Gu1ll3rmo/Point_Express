import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id_notificacion: number;

  @Column()
  id_usuario: number;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_envio: Date;

  @Column({ type: 'tinyint', default: 0 })
  leido: boolean;
}
