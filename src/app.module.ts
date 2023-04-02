import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '152.136.191.155',
        port: 3306,
        username: 'root',
        password: 'Xzp0319win',
        database: 'xdclass-edu',
        entities: [],
        autoLoadEntities: true
        // synchronize: true
      })
    }),
    UserModule,
    AuthModule
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
