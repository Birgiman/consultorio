import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  controllers: [AddressController],
  providers: [AddressService, PrismaService],
})
export class AddressModule {}
