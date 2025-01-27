import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Endpoint para obtener todos los usuarios
  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }
}
