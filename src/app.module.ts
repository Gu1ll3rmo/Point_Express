import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';
import { DetallePedidosModule } from './detallepedidos/detallepedidos.module';
import { EntregasModule } from './entregas/entregas.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { RecolectoresModule } from './recolectores/recolectores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Cambia según tu configuración
      database: 'Pointexpress',
      autoLoadEntities: true,
      synchronize: false, // No modifiques el esquema automáticamente
    }),
    UsuariosModule,
    ProductosModule,
    PedidosModule,
    PagosModule,
    DetallePedidosModule,
    EntregasModule,
    NotificacionesModule,
    RecolectoresModule,
  ],
})
export class AppModule {}
