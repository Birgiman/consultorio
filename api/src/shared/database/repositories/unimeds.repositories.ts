import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UnimedsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UnimedCreateArgs) {
    return this.prismaService.unimed.create(createDto);
  }

  findFirst(findFirstDto: Prisma.UnimedFindFirstArgs) {
    return this.prismaService.unimed.findFirst(findFirstDto);
  }

  findUnique(findUniqueDto: Prisma.UnimedFindUniqueArgs) {
    return this.prismaService.unimed.findUnique(findUniqueDto);
  }

  findUnimedsBy(unimedType: Prisma.UnimedFindManyArgs) {
    return this.prismaService.unimed.findMany(unimedType);
  }

  update(updateDto: Prisma.UnimedUpdateArgs) {
    return this.prismaService.unimed.update(updateDto);
  }

  delete(deleteDto: Prisma.UnimedDeleteArgs) {
    return this.prismaService.unimed.delete(deleteDto);
  }
}
