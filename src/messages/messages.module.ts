import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepositery } from './messages.repositery';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepositery],
})
export class MessagesModule {}
