import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInput } from 'src/dto/create-user-input/create-user-input';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }
}
