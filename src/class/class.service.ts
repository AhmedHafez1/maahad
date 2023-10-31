import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {
  constructor(@InjectRepository(Class) private repository: Repository<Class>) {}
  async create(createClassDto: CreateClassDto) {
    return await this.repository.create(createClassDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return await this.repository.update(id, updateClassDto);
  }

  async remove(id: string) {
    await this.repository.delete({ id });
  }
}
