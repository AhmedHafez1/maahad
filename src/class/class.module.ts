import { Module } from '@nestjs/common';
import { ClassroomService } from './class.service';
import { ClassroomController } from './class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  controllers: [ClassroomController],
  providers: [ClassroomService],
})
export class ClassroomModule {}
