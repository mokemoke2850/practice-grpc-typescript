import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: number;

  @CreateDateColumn({
    comment: '作成日時',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: string;

  @UpdateDateColumn({
    comment: '更新日時',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt!: string;
}
