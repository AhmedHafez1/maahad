import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './class/class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './class/entities/class.entity';

@Module({
  imports: [
    ClassroomModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'maahad',
      entities: [Classroom],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
