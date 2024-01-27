import { Test, TestingModule } from '@nestjs/testing';
import { PetRepository } from './pet.repository';

describe('PetRepository', () => {
  let service: PetRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetRepository],
    }).compile();

    service = module.get<PetRepository>(PetRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
