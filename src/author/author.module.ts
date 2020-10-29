import { Module } from '@nestjs/common';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';

@Module({
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
