import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TaskModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
