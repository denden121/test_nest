import { Module } from '@nestjs/common';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./books/books.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
