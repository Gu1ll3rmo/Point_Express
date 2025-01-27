import { Test, TestingModule } from '@nestjs/testing';
import { DetallepedidosController } from './detallepedidos.controller';
import { DetallepedidosService } from './detallepedidos.service';

describe('DetallepedidosController', () => {
  let controller: DetallepedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallepedidosController],
      providers: [DetallepedidosService],
    }).compile();

    controller = module.get<DetallepedidosController>(DetallepedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
