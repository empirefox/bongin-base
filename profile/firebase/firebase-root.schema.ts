export const FbRootSchema = {
  schema: {
    title: 'Firebase Root User',
    type: 'object',
    properties: {
      key: { title: 'key', type: 'string', readonly: true },
      name: { title: '备注', type: 'string' },
    },
    required: ['key', 'name'],
  },
  form: [
    'key',
    'name',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};