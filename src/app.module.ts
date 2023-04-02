import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AuthModule],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
