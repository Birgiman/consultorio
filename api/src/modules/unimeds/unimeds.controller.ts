import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUnimedDto } from './dto/create-unimed.dto';
import { UpdateUnimedDto } from './dto/update-unimed.dto';
import { UnimedType } from './entities/UnimedEntities';
import { UnimedsService } from './services/unimeds.service';

@Controller('unimeds')
export class UnimedsController {
  constructor(private readonly unimedsService: UnimedsService) {}

  @Post()
  create(@Body() createUnimedDto: CreateUnimedDto) {
    return this.unimedsService.create(createUnimedDto);
  }

  @Get()
  findUnimedsBy(@Query('type') type: UnimedType) {
    return this.unimedsService.findUnimedsBy({ type });
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUnimedDto: UpdateUnimedDto,
  ) {
    return this.unimedsService.update(id, updateUnimedDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.unimedsService.remove(id);
  }
}
