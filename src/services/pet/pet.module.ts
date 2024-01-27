import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PetRepository } from 'src/repository/pet/pet.repository';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { StatService } from '../stat/stat.service';
import { StatRepository } from 'src/repository/stat/stat.repository';

@Module({
  controllers: [PetController],
  providers: [
    PetService,
    PetRepository,
    StatService,
    StatRepository,
    PrismaService,
  ],
})
export class PetModule {}
