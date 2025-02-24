import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { Pago } from './entities/pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago])], // Registra la entidad de pagos
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
