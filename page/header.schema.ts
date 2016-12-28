export const HeaderSchema = {
  schema: {
    title: '页面头部',
    type: 'object',
    properties: {
      hide: { title: '不显示', type: 'boolean' },
      hfull: { title: '横向满屏', type: 'boolean' },
      height: { title: '高度', type: 'integer' },
      body: { title: '内容', type: 'string' },
    },
  },
  form: [
    'hide',
    'hfull',
    'height',
    { "key": "body", "type": "smd" },
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};