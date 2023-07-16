import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AccountsRepository } from './repositories/accounts.repositories';
import { AddressRepository } from './repositories/address.repositories';
import { ClientsReposiory } from './repositories/clients.repositories';
import { UnimedsRepository } from './repositories/unimeds.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    AccountsRepository,
    AddressRepository,
    ClientsReposiory,
    UnimedsRepository,
  ],
  exports: [
    AccountsRepository,
    AddressRepository,
    ClientsReposiory,
    UnimedsRepository,
  ],
})
export class DatabaseModule {}
