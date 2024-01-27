import { Injectable } from '@nestjs/common';
import { PetRepository } from 'src/repository/pet/pet.repository';
import { CreatePetInput } from 'src/dto/create-pet-input/create-pet-input';
import { StatService } from '../stat/stat.service';

@Injectable()
export class PetService {
  constructor(
    private readonly petRepository: PetRepository,
    private readonly statService: StatService,
  ) {}

  async create(createInput: CreatePetInput) {
    const pet = await this.petRepository.create(createInput);
    const stats = await this.statService.create({
      petId: pet.id,
      happiness: 100,
      hunger: 100,
      health: 100,
      energy: 100,
    });

    return {
      petId: pet.id,
      statsId: stats.id,
      happiness: stats.happiness,
      hunger: stats.hunger,
      health: stats.health,
      energy: stats.energy,
    };
  }
}
