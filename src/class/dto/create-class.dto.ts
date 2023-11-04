import { Gender } from './../shared/enums/gender.enum';
export class CreateClassroomDto {
  name: string;
  gender: Gender;
  floor: number;
  stage: number;
  description: string;
}
