import { Controller, Post, Body } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetInput } from '../../dto/create-pet-input/create-pet-input';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createInput: CreatePetInput) {
    return this.petService.create(createInput);
  }
}
