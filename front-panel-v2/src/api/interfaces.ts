export type IUserSex = 'male' | 'female';

export interface IEditUser {
  login?: string;
  nick?: string;
  phone?: string;
  age?: number;
  sex?: IUserSex;
}
