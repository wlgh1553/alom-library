import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private readonly publishersService: PublishersService) {}
  @Post()
  async postPublisher(@Body('name') name: string) {
    const publisher = await this.publishersService.createPublisher(name);
    if (publisher instanceof BadRequestException) {
      return {
        message: '잘못된 요청입니다.',
        error: publisher.message,
      };
    } else {
      return {
        message: `성공적으로 생성되었습니다.`,
        name: publisher.name,
      };
    }
  }

  //개발용
  @Get()
  getPublishers() {
    return this.publishersService.getAllPublishers();
  }
}
