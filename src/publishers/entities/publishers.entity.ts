import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PublishersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //data는 어떻게 할까?
}
