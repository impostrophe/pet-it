import { Test, TestingModule } from '@nestjs/testing';
import { StatRepository } from './stat.repository';

describe('StatRepository', () => {
  let service: StatRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatRepository],
    }).compile();

    service = module.get<StatRepository>(StatRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
