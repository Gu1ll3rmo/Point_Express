import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecolectoresService } from './recolectores.service';
import { RecolectoresController } from './recolectores.controller';
import { Recolector } from './entities/recolectore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recolector])], // Registra la entidad de recolectores
  controllers: [RecolectoresController],
  providers: [RecolectoresService],
})
export class RecolectoresModule {}
