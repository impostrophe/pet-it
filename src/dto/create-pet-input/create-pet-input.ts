import { ApiProperty } from '@nestjs/swagger';

export class CreatePetInput {
  @ApiProperty({
    description: 'Pet name',
  })
  name: string;

  @ApiProperty({
    description: 'Pet type',
  })
  type: string;

  @ApiProperty({
    description: 'Pet owner id',
  })
  ownerId: string;
}
