import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeSlotReservationDto } from './create-time-slot-reservation.dto';

export class UpdateTimeSlotReservationDto extends PartialType(
  CreateTimeSlotReservationDto,
) {}
