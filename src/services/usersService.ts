import { User } from '@/entities/User';

export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: 'jave@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    };
  }

  public create(UserCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000),
      status: 'Happy',
      ...UserCreationParams,
    };
  }
}
