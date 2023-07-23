import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { TimeSlotReservationRepository } from 'src/shared/database/repositories/timeSlotReservation.repositories';
import { TimeSlotReservationService } from './services/time-slot-reservation.service';
import { ValidationsTimeSlotReservations } from './services/validationsTimeSlotReservation.service';
import { TimeSlotReservationController } from './time-slot-reservation.controller';

@Module({
  controllers: [TimeSlotReservationController],
  providers: [
    TimeSlotReservationService,
    TimeSlotReservationRepository,
    ValidationsTimeSlotReservations,
    PrismaService,
  ],
})
export class TimeSlotReservationModule {}
