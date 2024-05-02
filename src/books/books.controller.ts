import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksModel } from './entities/books.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async postBook(
    @Body('title') title: string,
    @Body('publisher') publisher: string,
  ) {
    const book = await this.booksService.createBook(title, publisher);
    if (book instanceof BooksModel) {
      return {
        message: '성공적으로 생성되었습니다.',
        book: book.title,
      };
    } else {
      return {
        message: '잘못된 요청입니다.',
        error: book.message,
      };
    }
  }

  @Get(':publisher')
  async getBooksByPublisher(@Param('publisher') publisher: string) {
    const books = await this.booksService.findBookTitlesByPublisher(publisher);
    if (books instanceof BadRequestException) {
      return {
        message: '잘못된 요청입니다.',
        error: books.message,
      };
    } else {
      return {
        message: `${publisher} 출판사의 책입니다.`,
        data: books,
      };
    }
  }

  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
}
