export const FbOperatorSchema = {
  schema: {
    title: 'Firebase Operator User',
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