import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  doSomething() {
    console.log('aaaaaa');
    throw new Error('Method not implemented.');
  }
}
