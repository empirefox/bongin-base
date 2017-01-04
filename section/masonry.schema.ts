export const MasonrySchema = {
  schema: {
    title: '瀑布流',
    type: 'object',
    properties: {
      cols: { title: '宽度', type: 'integer', minimum: 0, maximum: 12 },
      sectionclass: { title: 'class', type: 'string' },
      columnWidth: { title: '列宽', type: 'integer' },
      gutter: { title: '水平间隙', type: 'integer' },
      vgutter: { title: '垂直间隙', type: 'integer' },
      transitionDuration: { title: '渐变时间', type: 'string', description: 'eg: 0.8s' },
      resize: { title: '自动调整', type: 'boolean' },
    },
  },
  form: [
    'cols',
    'sectionclass',
    'columnWidth',
    'gutter',
    'vgutter',
    'transitionDuration',
    'resize',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
