export const PageSchema = {
  schema: {
    title: '页面',
    type: 'object',
    properties: {
      id: { title: 'id', type: 'string', readonly: true },
      detail: { title: '描述(head标签)', type: 'string' },
      showside: { title: '显示侧栏', type: 'boolean' },
      bg: { title: '背景', type: 'string' },
    },
    required: ['id', 'name']
  },
  form: [
    'id',
    'detail',
    'showside',
    { "key": "bg", "type": "bg" },
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
