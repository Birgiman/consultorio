import { BadRequestException, Injectable } from '@nestjs/common';
import { TimeSlotReservationRepository } from 'src/shared/database/repositories/timeSlotReservation.repositories';

@Injectable()
export class ValidationsTimeSlotReservations {
  constructor(
    private readonly timeSlotReservationRepo: TimeSlotReservationRepository,
  ) {}

  async client(id: string, message: string) {
    const data = await this.timeSlotReservationRepo.findFirst({
      where: { clientId: id },
      select: { clientId: true },
    });
    console.log({ data: data });
    if (!data) {
      throw new BadRequestException(message);
    }
  }

  async id(id: string, message: string) {
    const data = await this.timeSlotReservationRepo.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!data) {
      throw new BadRequestException(message);
    }
  }
}
