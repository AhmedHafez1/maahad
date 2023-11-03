import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './class/class.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import ORMConfig from './config/orm.config';
import ORMConfigProd from './config/orm.config.prod';

@Module({
  imports: [
    ClassroomModule,
    ConfigModule.forRoot({ load: [ORMConfig] }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV !== 'production' ? ORMConfig : ORMConfigProd,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
