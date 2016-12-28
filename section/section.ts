import { IPanel } from '../panel';
import { Masonry } from './masonry';
import { Carousel } from './carousel';
import { Swiper } from './swiper';

export interface ISection {
  id?: string;
  title?: string;
  detail?: string;
  cols: number;
  pattern?: string;
  bg?: string;
  hfull?: boolean;
  sideshow?: boolean;

  panels?: IPanel[];

  Carousel?: Carousel;
  Masonry?: Masonry;
  Swiper?: Swiper;

  template: string;
}
