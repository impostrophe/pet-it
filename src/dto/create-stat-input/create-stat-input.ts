import { ApiProperty } from '@nestjs/swagger';

export class CreateStatInput {
  @ApiProperty({
    description: 'Pet id to create stats for',
  })
  petId: string;

  @ApiProperty({
    description: 'Pet happiness',
  })
  happiness: number;

  @ApiProperty({
    description: 'Pet hunger',
  })
  hunger: number;

  @ApiProperty({
    description: 'Pet health',
  })
  health: number;

  @ApiProperty({
    description: 'Pet energy',
  })
  energy: number;
}
