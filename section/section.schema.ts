export const SectionSchema = {
  schema: {
    title: '区块',
    type: 'object',
    properties: {
      title: { title: '标题', type: 'string' },
      detail: { title: '描述', type: 'string' },
      cols: { title: '宽度', type: 'integer', minimum: 0, maximum: 12 },
      bg: { title: '背景', type: 'string' },
      hfull: { title: '横向满屏', type: 'boolean' },
      sideshow: { title: '显示侧栏', type: 'boolean' },
    },
  },
  form: [
    'title',
    { key: 'detail', type: 'smd' },
    { key: 'cols', type: 'range', step: 1 },
    { key: 'bg', type: 'bg' },
    'hfull',
    'sideshow',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
