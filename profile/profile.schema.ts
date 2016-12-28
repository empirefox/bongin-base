export const ProfileSchema = {
  schema: {
    title: '配置项',
    type: 'object',
    properties: {
      themeUrl: { title: '主题url', type: 'string' },
      fullcom: { title: '公司全称', type: 'string' },
      shortcom: { title: '公司简称', type: 'string' },
      title: { title: '网站名称', type: 'string' },
      detail: { title: '网站简介', type: 'string' },
      keywords: { title: '关键字', type: 'string' },
      addr: { title: '公司地址', type: 'string' },
      logo: { title: 'Logo', type: 'string' },
      ico16: { title: 'ico16', type: 'string' },
      ico32: { title: 'ico32', type: 'string' },
      ico64: { title: 'ico64', type: 'string' },
    },
    required: ['themeUrl', 'shortcom'],
  },
  form: [
    'themeUrl',
    'fullcom',
    'shortcom',
    'title',
    'detail',
    'keywords',
    'addr',
    { title: 'logo', type: 'img' },
    { title: 'ico16', type: 'img' },
    { title: 'ico32', type: 'img' },
    { title: 'ico64', type: 'img' },
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
