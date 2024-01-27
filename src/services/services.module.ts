import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConversationModule } from './conversation/conversation.module';
import { PetModule } from './pet/pet.module';
import { StatModule } from './stat/stat.module';

@Module({
  imports: [UserModule, ConversationModule, PetModule, StatModule],
})
export class ServicesModule {}
