import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('recolectores')
export class Recolector {
  @PrimaryGeneratedColumn()
  id_recolector: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 15, nullable: true })
  telefono: string;

  @Column({ length: 50, default: 'disponible' })
  estatus: string;
}
