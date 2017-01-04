export const CarouselSchema = {
  schema: {
    title: '默认轮播',
    type: 'object',
    properties: {
      sectionclass: { title: 'class', type: 'string' },
      interval: { title: '间隔时间', type: 'integer' },
      noTransition: { title: '不渐变', type: 'boolean' },
      noPause: { title: '不暂停', type: 'boolean' },
      noWrap: { title: '不包裹', type: 'boolean' },
    },
  },
  form: [
    'sectionclass',
    'interval',
    'noTransition',
    'noPause',
    'noWrap',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
