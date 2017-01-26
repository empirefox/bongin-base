export interface ISetUserInfoPayload {
  Nickname: string;
  Sex: number;
  City: string;
  Province: string;
  Birthday: number;
  CarInsurance: string;
  InsuranceFee: number;
  CarIntro: string;
  Hobby: string;
  Career: string;
  Demand: string;
  Intro: string;
}

export interface IUserInfo {
  // from jwt, write limit
  ID: number;
  OpenId: string;
  Phone: string;
  User1: number;

  Writable: ISetUserInfoPayload;

  HeadImageURL: string;

  // ro
  CreatedAt: number;
  UpdatedAt: number;
  HasPayKey: boolean;
}

export interface IPreBindPhonePayload {
  Phone: string;
}

export interface IBindPhonePayload {
  Phone: string;
  Code: string;
  CaptchaID: string;
  Captcha: string;
  RefreshToken?: string;
}

export interface ExchangePayload {
  code: string;
  state: string;
  user1?: number;
}