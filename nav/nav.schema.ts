export const NavSchema = {
  schema: {
    title: '菜单项',
    type: 'object',
    properties: {
      maxlength: { title: '最大长度', type: 'integer' },
      showicon: { title: '显示图标', type: 'boolean' },
      incontainer: { title: '使用容器宽度', type: 'boolean' },
      reverse: { title: '反色', type: 'boolean' },
      large: { title: '大号', type: 'boolean' },
    },
  },
  form: [
    'maxlength',
    'showicon',
    'incontainer',
    'reverse',
    'large',
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
