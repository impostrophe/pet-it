import { ApiProperty } from '@nestjs/swagger';

export class CreateConversationInput {
  @ApiProperty({
    description: 'Conversation user id',
  })
  userId: string;

  @ApiProperty({
    description: 'Conversation text',
  })
  text: string;
}
