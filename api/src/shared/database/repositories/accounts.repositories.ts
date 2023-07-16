import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AccountsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AccountCreateArgs) {
    return this.prismaService.account.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.AccountFindUniqueArgs) {
    return this.prismaService.account.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.AccountUpdateArgs) {
    return this.prismaService.account.update(updateDto);
  }

  delete(deleteDto: Prisma.AccountDeleteArgs) {
    return this.prismaService.account.delete(deleteDto);
  }
}
