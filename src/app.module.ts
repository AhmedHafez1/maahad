import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './class/class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './class/entities/class.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClassroomModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Classroom],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
