import { Module } from '@nestjs/common';
import { StatService } from './stat.service';
import { StatController } from './stat.controller';
import { StatRepository } from '../../repository/stat/stat.repository';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [StatController],
  providers: [StatService, StatRepository, PrismaService],
})
export class StatModule {}
