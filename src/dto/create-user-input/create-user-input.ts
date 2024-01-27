import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInput {
  @ApiProperty({
    description: 'User gpt id',
  })
  gptId: string;
}
