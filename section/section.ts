import { IPanel } from '../panel';
import { Masonry } from './masonry';
import { Carousel } from './carousel';
import { Swiper } from './swiper';

export interface ISection {
  title?: string;
  detail?: string;
  cols: number;
  bg?: string;
  hfull?: boolean;
  sideshow?: boolean;

  panels?: IPanel[];

  pattern?: string;
  Carousel?: Carousel;
  Masonry?: Masonry;
  Swiper?: Swiper;

  id: string;
  template: string;
}
