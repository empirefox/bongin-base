export const NavItemSchema = {
  schema: {
    title: '菜单项',
    type: 'object',
    properties: {
      id: { title: 'id', type: 'string', readonly: true },
      name: { title: '菜单名', type: 'string' },
      icon: { title: '图标', type: 'string' },
      navshow: { title: '显示', type: 'boolean' },
    },
    required: ['id', 'name'],
  },
  form: [
    'id',
    'name',
    'icon',
    'navshow',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
