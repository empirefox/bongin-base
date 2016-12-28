import { Swiper } from './swiper';

export function initSwiper(option: SwiperOptions & Swiper) {
  option.slidesPerView = option.slidesPerView || 1;
  if (option.paging) {
    option.pagination = '.swiper-pagination';
    option.paginationClickable = true;
  }
  if (option.arrows) {
    option.nextButton = '.swiper-button-next';
    option.prevButton = '.swiper-button-prev';
  }
}
