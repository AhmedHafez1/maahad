import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private repository: Repository<Student>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const student = await this.repository.create(createStudentDto);

    return await this.repository.save(student);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.repository.update(id, updateStudentDto);
  }

  async remove(id: number) {
    return await this.repository.delete({ id });
  }
}
