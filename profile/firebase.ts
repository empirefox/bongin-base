export interface IRoot {
  key: string;
  name: string;
}

export interface IOperator {
  key: string;
  name: string;
}

export interface IUser {
  $key?: string;
  email: string;
  phone?: string;
}

export interface ISiteBase {
  $key?: string;
  uid: string;
  mainCdn: string;
  createdAt: number;
  expires: number;
}
