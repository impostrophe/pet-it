import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create() {
    return this.userService.create();
  }

  @Get(':id')
  async getOneById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
