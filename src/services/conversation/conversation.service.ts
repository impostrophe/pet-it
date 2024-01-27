import { Injectable } from '@nestjs/common';
import { ConversationRepository } from 'src/repository/conversation/conversation.repository';
import { CreateConversationInput } from 'src/dto/create-conversation-input/create-conversation-input';

@Injectable()
export class ConversationService {
  constructor(
    private readonly conversationRepository: ConversationRepository,
  ) {}

  create(createInput: CreateConversationInput) {
    return this.conversationRepository.create(createInput);
  }
}
