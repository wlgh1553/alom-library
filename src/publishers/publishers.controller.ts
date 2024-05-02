import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}
  @Post()
  postPublisher(@Body('name') name: string) {
    //나중에 dto로 바꿔보기
    return this.publishersService.createPublisher(name);
  }

  //개발용
  @Get()
  getPublishers() {
    return this.publishersService.getAllPublishers();
  }
}
