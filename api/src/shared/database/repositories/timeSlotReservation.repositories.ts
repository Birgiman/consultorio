import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TimeSlotReservationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TimeSlotReservationCreateArgs) {
    return this.prismaService.timeSlotReservation.create(createDto);
  }

  findFirst(findFirstDto: Prisma.TimeSlotReservationFindFirstArgs) {
    return this.prismaService.timeSlotReservation.findFirst(findFirstDto);
  }

  findUnique(findUniqueDto: Prisma.TimeSlotReservationFindUniqueArgs) {
    return this.prismaService.timeSlotReservation.findUnique(findUniqueDto);
  }

  findTimeSlotReservationBy(
    timeSlotReservationDto: Prisma.TimeSlotReservationFindManyArgs,
  ) {
    return this.prismaService.timeSlotReservation.findMany(
      timeSlotReservationDto,
    );
  }

  update(updateDto: Prisma.TimeSlotReservationUpdateArgs) {
    return this.prismaService.timeSlotReservation.update(updateDto);
  }

  delete(deleteDto: Prisma.TimeSlotReservationDeleteArgs) {
    return this.prismaService.timeSlotReservation.delete(deleteDto);
  }
}
