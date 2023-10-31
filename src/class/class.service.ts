import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-class.dto';
import { UpdateClassroomDto } from './dto/update-class.dto';
import { Classroom } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom) private repository: Repository<Classroom>,
  ) {}
  async create(createClassroomDto: CreateClassroomDto) {
    return await this.repository.create(createClassroomDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, updateClassroomDto: UpdateClassroomDto) {
    return await this.repository.update(id, updateClassroomDto);
  }

  async remove(id: string) {
    await this.repository.delete({ id });
  }
}
