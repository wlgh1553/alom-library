import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post()
  postBook(@Body('title') title: string, @Body('publisher') publisher: string) {
    //나중에 dto로 바꿔보기
    return this.booksService.createBook(title, publisher);
  }

  //개발용
  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
}
