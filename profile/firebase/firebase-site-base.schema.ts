export const FbSiteBaseSchema = {
  schema: {
    type: 'object',
    title: 'Firebase Site',
    properties: {
      $key: { title: '$key', type: 'string', readonly: true },
      uid: { title: 'uid', type: 'string', readonly: true },
      mainCdn: { title: '主CDN', type: 'string' },
      createdAt: { title: '创建时间', type: 'string', format: 'date-time', readonly: true },
      expires: { title: '过期时间', type: 'string', format: 'date-time' },
    },
    required: ['email', 'phone'],
  },
  form: [
    '$key',
    'uid',
    'mainCdn',
    'expires',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
