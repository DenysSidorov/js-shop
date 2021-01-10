export interface IGetGoodsParams {
  sort: string;
  pagesize: string;
  numberpage: string;
}


export type IUserSex = 'male' | 'female';

export interface IEditUser {
  login?: string;
  nick?: string;
  phone?: string;
  age?: number;
  male?: IUserSex
}
