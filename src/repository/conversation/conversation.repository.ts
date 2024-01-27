import { Injectable } from '@nestjs/common';
import { CreateConversationInput } from 'src/dto/create-conversation-input/create-conversation-input';
import { PrismaService } from 'src/shared/prisma/prisma.service';

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
