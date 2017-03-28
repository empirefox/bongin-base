export const SiteSchema = {
  schema: {
    title: '网站',
    type: 'object',
    properties: {
      ID: { title: 'ID', type: 'string', readonly: true },
      Domain: { title: '域名', type: 'string' },
      MainCdn: { title: '主cdn', type: 'string', readonly: true },
      MainCdns: { title: '主加密cdn', type: 'string', readonly: true },
      ProfileHash: { title: '配置位置', type: 'string', readonly: true },
      Phone: { title: '电话', type: 'string' },
      Email: { title: '邮件', type: 'string' },
    },
    required: ['Domain'],
  },
  form: [
    'ID',
    'Domain',
    'MainCdn',
    'MainCdns',
    'ProfileHash',
    'Phone',
    'Email',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
