import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';
import { TimeSlotReservationPeriod } from '../entities/TimeSlotreservationPeriod';
import { TimeSlotReservationStatus } from '../entities/TimeSlotreservationStatus';

export class CreateTimeSlotReservationDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  clientId: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsEnum(TimeSlotReservationStatus)
  status: TimeSlotReservationStatus;

  @IsNotEmpty()
  @IsEnum(TimeSlotReservationPeriod)
  period: TimeSlotReservationPeriod;
}
