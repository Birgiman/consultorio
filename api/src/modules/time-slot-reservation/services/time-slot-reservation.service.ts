import { Injectable } from '@nestjs/common';
import { TimeSlotReservationRepository } from 'src/shared/database/repositories/timeSlotReservation.repositories';
import { CreateTimeSlotReservationDto } from '../dto/create-time-slot-reservation.dto';
import { UpdateTimeSlotReservationDto } from '../dto/update-time-slot-reservation.dto';
import { TimeSlotReservationPeriod } from '../entities/TimeSlotreservationPeriod';
import { TimeSlotReservationStatus } from '../entities/TimeSlotreservationStatus';
import { ValidationsTimeSlotReservations } from './validationsTimeSlotReservation.service';

@Injectable()
export class TimeSlotReservationService {
  constructor(
    private readonly timeSlotReservationRepo: TimeSlotReservationRepository,
    private readonly validationsTimeSlotReservations: ValidationsTimeSlotReservations,
  ) {}

  async create(createTimeSlotReservationDto: CreateTimeSlotReservationDto) {
    const { clientId, date, status, period } = createTimeSlotReservationDto;

    return await this.timeSlotReservationRepo.create({
      data: {
        clientId,
        date,
        status,
        period,
      },
    });
  }

  async findTimeSlotReservationBy(filters: {
    clientId: string;
    status: TimeSlotReservationStatus;
    period: TimeSlotReservationPeriod;
  }) {
    return await this.timeSlotReservationRepo.findTimeSlotReservationBy({
      where: {
        clientId: filters.clientId,
        status: filters.status,
        period: filters.period,
      },
    });
  }

  async update(
    id: string,
    updateTimeSlotReservationDto: UpdateTimeSlotReservationDto,
  ) {
    await this.validationsTimeSlotReservations.id(id, 'Reservation not found.');

    const { clientId, date, status, period } = updateTimeSlotReservationDto;

    await this.validationsTimeSlotReservations.client(
      clientId,
      'Client not found.',
    );

    return await this.timeSlotReservationRepo.update({
      where: { id },
      data: {
        date,
        status,
        period,
      },
    });
  }

  async remove(id: string) {
    await this.validationsTimeSlotReservations.id(id, 'Reservation not found.');

    await this.timeSlotReservationRepo.delete({
      where: { id },
    });

    return null;
  }
}
