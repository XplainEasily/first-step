import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/fr")
  getFr(): string {
    return this.appService.getFr();
  }

  @Get("/items")
  getItems(): string[] {
    return this.appService.getItems();
  }

}
