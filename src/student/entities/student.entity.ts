import { Classroom } from 'src/class/entities/class.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom: Classroom;
}
