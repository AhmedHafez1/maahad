import { PartialType } from '@nestjs/mapped-types';
import { CreateClassroomDto } from './create-class.dto';

export class UpdateClassroomDto extends PartialType(CreateClassroomDto) {}
