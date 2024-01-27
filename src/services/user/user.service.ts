import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/dto/create-user-input/create-user-input';
import { UserRepository } from 'src/repository/user/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUserInput: CreateUserInput) {
    return this.userRepository.create(createUserInput);
  }
}
