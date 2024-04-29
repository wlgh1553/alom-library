import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { stringify } from 'querystring';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  // @Post()
  // postBook(
  //   @Body('title') title: string,
  //   @Body('publisher') publisher: string,
  // ) {

  // }
}
