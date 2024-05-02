import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post()
  postBook(@Body('title') title: string, @Body('publisher') publisher: string) {
    //나중에 dto로 바꿔보기
    return this.booksService.createBook(title, publisher);
  }

  @Get('/:publisher')
  getBooksByPublisher(@Param('publisher') publisher: string) {
    return this.booksService.findBooksByPublisher(publisher);
  }

  //개발용
  @Get()
  getBooks() {
    return this.booksService.getAllBooks();
  }
}
