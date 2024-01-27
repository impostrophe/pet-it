import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { ConversationRepository } from '../../repository/conversation/conversation.repository';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [ConversationController],
  providers: [ConversationService, ConversationRepository, PrismaService],
})
export class ConversationModule {}
