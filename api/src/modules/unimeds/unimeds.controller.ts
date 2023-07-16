import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUnimedDto } from './dto/create-unimed.dto';
import { UpdateUnimedDto } from './dto/update-unimed.dto';
import { UnimedType } from './entities/UnimedEntities';
import { UnimedsService } from './unimeds.service';

@Controller('unimeds')
export class UnimedsController {
  constructor(private readonly unimedsService: UnimedsService) {}

  @Post()
  create(@Body() createUnimedDto: CreateUnimedDto) {
    return this.unimedsService.create(createUnimedDto);
  }

  @Get()
  findAll() {
    return this.unimedsService.findAll();
  }

  @Get()
  findOne(@Param('type') type: UnimedType) {
    return this.unimedsService.findByUnimedType({ type });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUnimedDto: UpdateUnimedDto) {
    return this.unimedsService.update(id, updateUnimedDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.unimedsService.remove(id);
  }
}
