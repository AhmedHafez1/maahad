import { Gender } from './../shared/enums/gender.enum';
export class CreateClassDto {
  name: string;
  gender: Gender;
  floor: number;
  stage: number;
}
