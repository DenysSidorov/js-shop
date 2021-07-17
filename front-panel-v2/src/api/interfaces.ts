export type IUserSex = 'male' | 'female';

export interface iEditUser {
    login?: string;
    nick?: string;
    phone?: string;
    age?: number;
    sex?: IUserSex;
}
