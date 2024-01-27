import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { RepositoryModule } from './repository/repository.module';
import { DtoModule } from './dto/dto.module';

@Module({
  imports: [SharedModule, ServicesModule, RepositoryModule, DtoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
