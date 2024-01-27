import { Controller, Post, Body } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateConversationInput } from '../../dto/create-conversation-input/create-conversation-input';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  create(@Body() createInput: CreateConversationInput) {
    return this.conversationService.create(createInput);
  }
}
