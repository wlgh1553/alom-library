import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { stringify } from 'querystring';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post()
  postBook(
    @Body('title') title: string,
    @Body('publisher') publisher: string,
  ) {}

  //개발용
  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
}
