export const SwiperSchema = {
  schema: {
    title: '高级轮播',
    type: 'object',
    properties: {
      slidesPerView: { title: '显示页数', type: 'integer' },
      spaceBetween: { title: '间隙', type: 'integer' },
      autoplay: { title: '播放时间', type: 'integer' },
      autoplayDisableOnInteraction: { title: '交互时停止', type: 'boolean' },
      loop: { title: '循环', type: 'boolean' },
      paging: { title: '显示分页', type: 'boolean' },
      arrows: { title: '显示箭头', type: 'boolean' },
    },
  },
  form: [
    'slidesPerView',
    'spaceBetween',
    'autoplay',
    'autoplayDisableOnInteraction',
    'loop',
    'paging',
    'arrows',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
