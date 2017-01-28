import { CarouselSchema } from './section/carousel.schema';
import { MasonrySchema } from './section/masonry.schema';
import { SwiperSchema } from './section/swiper.schema';

export { NavSchema } from './nav/nav.schema';
export { NavItemSchema } from './nav/nav-item.schema';
export { HeaderSchema } from './page/header.schema';
export { PageSchema } from './page/page.schema';
export { PanelSchema } from './panel/panel.schema';
export { ProfileSchema } from './profile/profile.schema';
export { CarouselSchema } from './section/carousel.schema';
export { MasonrySchema } from './section/masonry.schema';
export { SwiperSchema } from './section/swiper.schema';
export { SectionSchema } from './section/section.schema';

export const sectionPatternSchemas = {
    Carousel: CarouselSchema,
    Masonry: MasonrySchema,
    Swiper: SwiperSchema,
}
