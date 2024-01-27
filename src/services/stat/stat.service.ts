import { Injectable } from '@nestjs/common';
import { CreateStatInput } from '../../dto/create-stat-input/create-stat-input';
import { StatRepository } from '../../repository/stat/stat.repository';

@Injectable()
export class StatService {
  constructor(private readonly statRepository: StatRepository) {}

  create(createInput: CreateStatInput) {
    return this.statRepository.create(createInput);
  }

  findOne(id: string) {
    return this.statRepository.findOneByPetId(id);
  }

  update(id: string, updateInput: CreateStatInput) {
    return this.statRepository.update(id, updateInput);
  }
}
