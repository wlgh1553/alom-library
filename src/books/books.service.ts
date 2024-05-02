import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksModel } from './entities/books.entity';
import { Repository } from 'typeorm';
import { PublishersService } from 'src/publishers/publishers.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksModel)
    private readonly booksRepository: Repository<BooksModel>,
    private readonly publisherService: PublishersService,
  ) {}

  async createBook(title: string, publisherName: string) {
    if (!title || !publisherName) {
      return new BadRequestException(
        '책제목 또는 출판사명을 작성하지 않았습니다.',
      );
    }

    const publisher =
      await this.publisherService.getPublisherByName(publisherName);
    if (!publisher) {
      return new BadRequestException('존재하지 않는 출판사입니다.');
    }

    const book = this.booksRepository.create({
      publisher,
      title,
    });
    const newBook = await this.booksRepository.save(book);
    return newBook;
  }

  async findBookTitlesByPublisher(publisherName: string) {
    if (!publisherName) {
      return new BadRequestException(
        '책제목 또는 출판사명을 작성하지 않았습니다.',
      );
    }

    const publisher =
      await this.publisherService.getPublisherByName(publisherName);
    if (!publisher) {
      return new BadRequestException('존재하지 않는 출판사입니다.');
    }

    const books = this.booksRepository.find({
      select: ['title'],
      where: {
        publisher,
      },
    });

    return (await books).map((book) => book.title);
  }

  async getAllBooks() {
    return this.booksRepository.find();
  }
}
