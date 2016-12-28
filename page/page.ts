import { INavItem } from '../nav';
import { ISection } from '../section';
import { ISidenav, Sidenav } from '../sidenav';
import { IHeader } from './header';

export interface IPage extends INavItem {
  id: string;
  detail?: string; // in head tag
  showside?: boolean;
  bg?: string;

  ishome?: boolean; // from Nav

  header?: IHeader;
  showheader: boolean; // computed

  sidenav?: ISidenav;
  sider: Sidenav[]; // computed

  sections?: ISection[];
}
