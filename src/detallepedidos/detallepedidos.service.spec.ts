import { Test, TestingModule } from '@nestjs/testing';
import { DetallepedidosService } from './detallepedidos.service';

describe('DetallepedidosService', () => {
  let service: DetallepedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallepedidosService],
    }).compile();

    service = module.get<DetallepedidosService>(DetallepedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
