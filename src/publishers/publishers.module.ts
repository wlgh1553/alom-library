import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishersModel } from './entities/publishers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublishersModel])],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
