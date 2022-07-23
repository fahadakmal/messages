import { Injectable } from '@nestjs/common';
import { MessagesRepositery } from './messages.repositery';

@Injectable()
export class MessagesService {
  constructor(private messagseRepo: MessagesRepositery) {}

  async findOne(id: string) {
    return await this.messagseRepo.findOne(id);
  }

  findAll() {
    return this.messagseRepo.findAll();
  }

  create(content: string) {
    return this.messagseRepo.create(content);
  }
}
