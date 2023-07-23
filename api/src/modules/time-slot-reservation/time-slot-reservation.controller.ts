import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTimeSlotReservationDto } from './dto/create-time-slot-reservation.dto';
import { UpdateTimeSlotReservationDto } from './dto/update-time-slot-reservation.dto';
import { TimeSlotReservationPeriod } from './entities/TimeSlotreservationPeriod';
import { TimeSlotReservationStatus } from './entities/TimeSlotreservationStatus';
import { TimeSlotReservationService } from './services/time-slot-reservation.service';

@Controller('time-slot-reservation')
export class TimeSlotReservationController {
  constructor(
    private readonly timeSlotReservationService: TimeSlotReservationService,
  ) {}

  @Post()
  create(@Body() createTimeSlotReservationDto: CreateTimeSlotReservationDto) {
    return this.timeSlotReservationService.create(createTimeSlotReservationDto);
  }

  @Get()
  findTimeSlotReservationBy(
    @Query('clientId') clientId: string,
    @Query('status') status: TimeSlotReservationStatus,
    @Query('period') period: TimeSlotReservationPeriod,
  ) {
    return this.timeSlotReservationService.findTimeSlotReservationBy({
      clientId,
      status,
      period,
    });
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTimeSlotReservationDto: UpdateTimeSlotReservationDto,
  ) {
    return this.timeSlotReservationService.update(
      id,
      updateTimeSlotReservationDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.timeSlotReservationService.remove(id);
  }
}
