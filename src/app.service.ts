import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getItems(): string[] {
    return ['item1', 'item2', 'item3']
  }
  getHello(): string {
    return 'Hello World!';
  }
  getFr(): string {
    return 'Bonjour le monde'
  }
}
