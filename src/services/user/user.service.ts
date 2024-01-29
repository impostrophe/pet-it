import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create() {
    return this.userRepository.create();
  }

  public async getUserById(id: string) {
    return this.userRepository.findOneById(id);
  }
}
