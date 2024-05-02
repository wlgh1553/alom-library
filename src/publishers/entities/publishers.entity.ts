import { BooksModel } from 'src/books/entities/books.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PublishersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => BooksModel, (book) => book.publisher)
  books: BooksModel[];
}
