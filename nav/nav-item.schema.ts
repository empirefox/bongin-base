export const NavItemSchema = {
  schema: {
    title: '菜单项',
    type: 'object',
    properties: {
      name: { title: '菜单名', type: 'string' },
      icon: { title: '图标', type: 'string' },
      navshow: { title: '显示', type: 'boolean' },
      slug: { title: 'slug', type: 'string' },
    },
    required: ['id', 'name'],
  },
  form: [
    'name',
    'icon',
    'navshow',
    'slug',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
