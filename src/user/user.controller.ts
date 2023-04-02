import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/auth/auth.decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':name')
  @Public()
  findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }
}
