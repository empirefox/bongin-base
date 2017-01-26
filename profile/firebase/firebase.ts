export interface IFbRoot {
  key: string;
  name: string;
}

export interface IFbOperator {
  key: string;
  name: string;
}

export interface IFbUser {
  $key?: string;
  email: string;
  phone?: string;
}

export interface IFbSiteBase {
  $key?: string;
  uid: string;
  mainCdn: string;
  createdAt: number;
  expires: number;
}
