import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}
  @Post()
  postPublisher(@Body('name') name: String) {
    //null확인
    //title 중복 확인
    //db저장 {"name":"민음사", "data":[]}
    //반환 (예시대로 반환하기)
  }

  //개발용
  @Get()
  getPublishers() {
    return this.publishersService.getAllPublishers();
  }
}
