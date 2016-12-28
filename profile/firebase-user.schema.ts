export const FbUserSchema = {
  schema: {
    type: 'object',
    title: 'Firebase User',
    properties: {
      $key: { title: '$key', type: 'string', readonly: true },
      email: { title: 'Email', type: 'string', pattern: '^\\S+@\\S+$', readonly: true },
      phone: { title: '手机', type: 'string', pattern: '^1[3|4|5|7|8]\\d{9}$' }
    },
    required: ['email', 'phone'],
  },
  form: [
    '$key',
    'email',
    'phone',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
