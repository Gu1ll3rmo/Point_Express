import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregasService } from './entregas.service';
import { EntregasController } from './entregas.controller';
import { Entrega } from './entities/entregas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entrega])], // Registra la entidad de entregas
  controllers: [EntregasController],
  providers: [EntregasService],
})
export class EntregasModule {}
