import { INavItem } from './nav-item';

export interface INav {
  maxlength?: number;
  showicon?: boolean;
  incontainer?: boolean;
  reverse?: boolean;
  large?: boolean;
  home: INavItem;
  items: INavItem[];
}
