import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFr(): string {
    return 'Bonjour le monde'
  }
}
