import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { Gender } from './shared/enums/gender.enum';

@Injectable()
export class ClassService {
  private classes: Class[] = [
    { floor: 2, id: '1', name: 'Class 1', gender: Gender.MALE, stage: 1 },
    { floor: 3, id: '2', name: 'Class 5', gender: Gender.FEMALE, stage: 5 },
    { floor: 1, id: '3', name: 'Class 4', gender: Gender.MALE, stage: 4 },
    { floor: 2, id: '4', name: 'Class 6', gender: Gender.MALE, stage: 6 },
    { floor: 1, id: '5', name: 'Class 3', gender: Gender.FEMALE, stage: 3 },
    { floor: 3, id: '6', name: 'Class 2', gender: Gender.MALE, stage: 2 },
  ];

  create(createClassDto: CreateClassDto) {
    const newClass: Class = {
      ...createClassDto,
      id: `${this.classes.length + 1}`,
    };
    return newClass;
  }

  findAll() {
    return this.classes;
  }

  findOne(id: string) {
    return this.classes.find((c) => c.id === id);
  }

  update(id: string, updateClassDto: UpdateClassDto) {
    const index = this.classes.findIndex((c) => c.id === id);
    this.classes[index] = { ...this.classes[index], ...updateClassDto };
    return this.classes[index];
  }

  remove(id: string) {
    this.classes = this.classes.filter((c) => id !== c.id);
  }
}
