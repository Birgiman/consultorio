import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ClientsReposiory {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ClientCreateArgs) {
    return this.prismaService.client.create(createDto);
  }

  findMany() {
    return this.prismaService.client.findMany();
  }

  findUnique(findUniqueDto: Prisma.ClientFindUniqueArgs) {
    return this.prismaService.client.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.ClientUpdateArgs) {
    return this.prismaService.client.update(updateDto);
  }

  delete(deleteDto: Prisma.ClientDeleteArgs) {
    return this.prismaService.client.delete(deleteDto);
  }
}
