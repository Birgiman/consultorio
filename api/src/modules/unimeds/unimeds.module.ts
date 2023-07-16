import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UnimedsController } from './unimeds.controller';
import { UnimedsService } from './unimeds.service';

@Module({
  controllers: [UnimedsController],
  providers: [UnimedsService, PrismaService],
})
export class UnimedsModule {}
