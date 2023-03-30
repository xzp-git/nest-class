import { All, Controller, Get, Next } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All()
  all(@Next() next) {
    console.log('all');
    next();
  }

  @Get()
  getHello(): string {
    console.log('get');
    return this.appService.getHello();
  }
}
