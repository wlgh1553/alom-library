import { Injectable } from '@nestjs/common';
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
    return; //this.publishersRepository.find({??});
  }
}
