import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { StatService } from './stat.service';
import { CreateStatInput } from '../../dto/create-stat-input/create-stat-input';

@Controller('stat')
export class StatController {
  constructor(private readonly statService: StatService) {}

  @Post()
  create(@Body() createInput: CreateStatInput) {
    return this.statService.create(createInput);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInput: CreateStatInput) {
    return this.statService.update(id, updateInput);
  }
}
