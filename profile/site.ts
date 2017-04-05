// readonly
export interface ISite {
  ID: number;
  Domain: string;
  MainCdn: string;
  MainCdns: string;
  ProfileHash: string;
  Phone: string;
  Email: string;
}

export class SiteMethods {

  constructor(private site: ISite, private ext = '') { }

  profile(): string {
    // http://cdn.a.com/s/1/f/sdfwer
    return `${this.cdn()}s/${this.site.ID}/f/${this.site.ProfileHash}${this.ext}`;
  }

  // INavItem
  page({ hash }: { hash: string }): string {
    // http://cdn.a.com/s/1/p/sdfwer
    return `${this.cdn()}s/${this.site.ID}/p/${hash}${this.ext}`;
  }

  cdn() {
    return location.protocol === 'https:' ? this.site.MainCdns : this.site.MainCdn;
  }
}