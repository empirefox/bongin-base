import { INav } from '../nav';
import { ISite } from './site';

export interface IProfile extends ISite {
  themeUrl: string;
  fullcom: string;
  shortcom: string;
  title: string;
  detail: string;
  keywords: string;
  addr?: string;
  logo?: string;
  ico16?: string;
  ico32?: string;
  ico64?: string;

  nav?: INav;
}
