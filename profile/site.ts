// readonly
export interface ISite {
  ID: number;
  Domain: string;
  MainCdn: string;
  ProfileHash: string;
  Phone: string;
  Email: string;
}

export class SiteMethods {

  constructor(private site: ISite) { }

  profile(): string {
    return `${this.site.MainCdn}profile.json?hash=${this.site.ProfileHash}`;
  }

  // INavItem
  page(item: { id: number, hash?: string }): string {
    return `${this.site.MainCdn}page/${item.id}.json?hash=${item.hash || ''}`;
  }
}