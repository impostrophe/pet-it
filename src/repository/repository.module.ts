import { Module } from '@nestjs/common';
import { UserRepository } from './user/user.repository';
import { ConversationRepository } from './conversation/conversation.repository';
import { PetRepository } from './pet/pet.repository';
import { StatRepository } from './stat/stat.repository';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  providers: [
    UserRepository,
    ConversationRepository,
    PetRepository,
    StatRepository,
    PrismaService,
  ],
})
export class RepositoryModule {}
