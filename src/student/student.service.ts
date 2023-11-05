import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Classroom } from 'src/class/entities/class.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(Classroom) private classRoomRepo: Repository<Classroom>,
  ) {}
  async create(createStudentDto: CreateStudentDto) {
    const student = await this.studentRepo.create(createStudentDto);
    const classroom = await this.classRoomRepo.findOneBy({
      id: createStudentDto.classroomId,
    });
    if (classroom) {
      student.classroom = classroom;
    }
    return await this.studentRepo.save(student);
  }

  async findAll() {
    return await this.studentRepo.find();
  }

  async findOne(id: number) {
    return await this.studentRepo.findOneBy({ id });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepo.findOneBy({ id });
    if (updateStudentDto.classroomId) {
      const classroom = await this.classRoomRepo.findOneBy({
        id: updateStudentDto.classroomId,
      });
      classroom && (student.classroom = classroom);
    }
    return await this.studentRepo.save({ ...student, ...updateStudentDto });
  }

  async remove(id: number) {
    return await this.studentRepo.delete({ id });
  }

  // Query builder

  getStudentsBaseQuery() {
    return this.studentRepo
      .createQueryBuilder('s')
      .select(['s.name', 's.age'])
      .orderBy('s.age', 'DESC');
  }

  async getStudent(id: number) {
    return await this.getStudentsBaseQuery()
      .where('s.id = :id', {
        id,
      })
      .getOne();
  }
}
