import { Injectable } from '@nestjs/common';
import { CreateStatInput } from 'src/dto/create-stat-input/create-stat-input';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class StatRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createInput: CreateStatInput) {
    return this.prisma.stat.create({
      data: {
        ...createInput,
      },
    });
  }

  public async findOneByPetId(petId: string) {
    return this.prisma.stat.findUnique({
      where: {
        petId,
      },
    });
  }

  public async update(id: string, updateInput: CreateStatInput) {
    return this.prisma.stat.update({
      where: {
        id,
      },
      data: {
        ...updateInput,
      },
    });
  }
}
