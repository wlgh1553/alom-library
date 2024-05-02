import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModel } from './entities/books.entity';
import { PublishersService } from 'src/publishers/publishers.service';
import { PublishersModule } from 'src/publishers/publishers.module';

@Module({
  imports: [TypeOrmModule.forFeature([BooksModel]), PublishersModule],
  controllers: [BooksController],
  providers: [BooksService, PublishersService],
})
export class BooksModule {}
