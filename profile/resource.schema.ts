export function resourceSchema(sites: { ID: number; Domain: string; }[]) {
  return {
    schema: {
      title: '资源',
      type: 'object',
      properties: {
        ID: { title: 'ID', type: 'string', readonly: true },
        TLS: { title: '加密', type: 'boolean' },
        Mount: { title: '挂载', type: 'integer', enum: sites.map(site => site.ID) },
        CreatedAt: { title: '创建时间', type: 'string', readonly: true },
        Expires: { title: '过期时间', type: 'string', readonly: true },
      },
    },
    form: [
      'ID',
      'TLS',
      {
        key: "Mount",
        type: 'select',
        titleMap: sites.map(site => ({ value: site.ID, name: site.Domain })),
      },
      'CreatedAt',
      'Expires',
      { type: 'submit', style: 'btn-info', title: 'OK' }
    ]
  };
}
