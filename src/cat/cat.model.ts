import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Cat extends Model<Cat> {
  @Column
  name: string;

  @Column({ defaultValue: null })
  country: string;

  @Column
  origin: string;

  @Column({ defaultValue: null })
  bodyType: string;

  @Column({ defaultValue: null })
  coat: string;

  @Column({ defaultValue: null })
  pattern: string;

  img: string;
}
