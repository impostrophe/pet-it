import { Test, TestingModule } from '@nestjs/testing';
import { ConversationRepository } from './conversation.repository';

describe('ConversationRepository', () => {
  let service: ConversationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationRepository],
    }).compile();

    service = module.get<ConversationRepository>(ConversationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
