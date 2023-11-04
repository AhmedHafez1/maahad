import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Classroom } from 'src/class/entities/class.entity';

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Classroom],
  synchronize: true,
});
