import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AddressRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AddressCreateArgs) {
    return this.prismaService.address.create(createDto);
  }

  findMany() {
    return this.prismaService.address.findMany();
  }

  findAddressBy(findFirstDto: Prisma.AddressFindFirstArgs) {
    return this.prismaService.address.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.AddressUpdateArgs) {
    return this.prismaService.address.update(updateDto);
  }

  delete(deleteDto: Prisma.AddressDeleteArgs) {
    return this.prismaService.address.delete(deleteDto);
  }
}
