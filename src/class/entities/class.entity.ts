import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../shared/enums/gender.enum';
import { Student } from 'src/student/entities/student.entity';

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ enum: [Gender.MALE, Gender.FEMALE] })
  gender: Gender;

  @Column()
  floor: number;

  @Column({ enum: [1, 2, 3, 4, 5, 6] })
  stage: number;

  @Column()
  description: string;

  @OneToMany(() => Student, (student) => student.classroom)
  students: Student[];
}
