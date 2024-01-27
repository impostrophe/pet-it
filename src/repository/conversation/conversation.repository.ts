import { Injectable } from '@nestjs/common';
import { CreateConversationInput } from '../../dto/create-conversation-input/create-conversation-input';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class ConversationRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createInput: CreateConversationInput) {
    return this.prisma.conversation.create({
      data: {
        ...createInput,
      },
    });
  }
}
