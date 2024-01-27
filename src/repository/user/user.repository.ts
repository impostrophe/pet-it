import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../../dto/create-user-input/create-user-input';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createInput: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        ...createInput,
      },
    });
  }

  public async findOneById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async findOneByGptId(gptId: string) {
    return this.prisma.user.findUnique({
      where: {
        gptId,
      },
    });
  }
}
