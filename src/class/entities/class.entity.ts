import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../shared/enums/gender.enum';

@Entity()
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  gender: Gender;

  @Column()
  floor: number;

  @Column()
  stage: number;
}
