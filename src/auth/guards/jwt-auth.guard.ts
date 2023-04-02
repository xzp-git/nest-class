import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../auth.decorators';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private context: ExecutionContext, private reflector: Reflector) {
    super();
  }

  canActivate() {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      this.context.getHandler(),
      this.context.getClass()
    ]);
    if (isPublic) {
      return true;
    }
    return super.canActivate(this.context);
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    const req = this.context.switchToHttp().getRequest();
    req.user = user;
    return user;
  }
}
