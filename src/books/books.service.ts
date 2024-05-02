import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksModel } from './entities/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksModel)
    private readonly booksRepository: Repository<BooksModel>,
  ) {}
}
