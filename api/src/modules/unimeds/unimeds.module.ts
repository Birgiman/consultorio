import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UnimedsService } from './services/unimeds.service';
import { ValidationsUnimeds } from './services/validationsUnimeds.service';
import { UnimedsController } from './unimeds.controller';

@Module({
  controllers: [UnimedsController],
  providers: [UnimedsService, ValidationsUnimeds, PrismaService],
})
export class UnimedsModule {}
