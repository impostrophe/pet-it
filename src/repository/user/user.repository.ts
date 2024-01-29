import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create() {
    return this.prisma.user.create({});
  }

  public async findOneById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
