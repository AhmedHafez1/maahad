import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ClassroomService } from './class.service';
import { CreateClassroomDto } from './dto/create-class.dto';
import { UpdateClassroomDto } from './dto/update-class.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classService: ClassroomService) {}

  @Post()
  async create(@Body() createClassroomDto: CreateClassroomDto) {
    return await this.classService.create(createClassroomDto);
  }

  @Get()
  async findAll() {
    return await this.classService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.classService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassroomDto: UpdateClassroomDto,
  ) {
    return await this.classService.update(id, updateClassroomDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.classService.remove(id);
  }
}
