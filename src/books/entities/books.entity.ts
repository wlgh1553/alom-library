import { PublishersModel } from 'src/publishers/entities/publishers.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BooksModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => PublishersModel, (publisher) => publisher.books, {
    nullable: false,
  })
  publisher: PublishersModel;
}
