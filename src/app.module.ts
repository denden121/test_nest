import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'db1',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      BooksModule,
      AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
