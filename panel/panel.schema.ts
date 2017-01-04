export const PanelSchema = {
  schema: {
    title: '面板',
    type: 'object',
    properties: {
      head: { title: '标题', type: 'string' },
      body: { title: '内容', type: 'string' },
      foot: { title: '尾部', type: 'string' },
      img: { title: '主图', type: 'string' },
      pattern: { title: '样式', type: 'string' },
      bg: { title: '背景', type: 'string' },
      txtalign: { title: '对齐', type: 'string', enum: ['inherit', 'left', 'right', 'center', 'justify'] },
    },
    required: ['body'],
  },
  form: [
    'head',
    { key: 'body', type: 'smd' },
    'foot',
    { key: 'img', type: 'img' },
    { key: 'pattern', type: 'panel-pattern' },
    { key: 'bg', type: 'bg' },
    {
      key: 'txtalign',
      type: 'radiobuttons',
      style: {
        selected: 'btn-success',
        unselected: 'btn-default',
      },
      titleMap: [
        { value: 'inherit', name: '<i class="fa fa-close"></i>' },
        { value: 'left', name: '<i class="fa fa-align-left"></i>' },
        { value: 'right', name: '<i class="fa fa-align-right"></i>' },
        { value: 'center', name: '<i class="fa fa-align-center"></i>' },
        { value: 'justify', name: '<i class="fa fa-align-justify"></i>' },
      ],
    },
    { type: 'submit', style: 'btn-info', title: 'OK' }
  ]
};
