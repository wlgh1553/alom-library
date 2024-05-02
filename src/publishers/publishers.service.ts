import { BadRequestException, Injectable } from '@nestjs/common';
import { PublishersModel } from './entities/publishers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(PublishersModel)
    private readonly publishersRepository: Repository<PublishersModel>,
  ) {}

  async getAllPublishers() {
    return this.publishersRepository.find({
      relations: ['books'],
    });
  }

  async getPublisherByName(name: string) {
    return this.publishersRepository.findOne({
      where: {
        name,
      },
    });
  }

  async createPublisher(name: string) {
    if (!name) {
      return new BadRequestException('출판사명을 입력하지 않았습니다.');
    }
    if (await this.getPublisherByName(name)) {
      return new BadRequestException('이미 존재하는 출판사입니다.');
    }

    const publisher = this.publishersRepository.create({
      name,
      books: [],
    });
    return await this.publishersRepository.save(publisher);
  }
}
