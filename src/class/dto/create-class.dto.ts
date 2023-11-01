import { Length } from 'class-validator';
import { Gender } from './../shared/enums/gender.enum';
export class CreateClassroomDto {
  @Length(3, 30)
  name: string;
  gender: Gender;
  floor: number;
  stage: number;
}
