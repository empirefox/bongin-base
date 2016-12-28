import { Featurette } from './featurette';

export interface IPanel {
  id?: string;
  head?: string;
  body: string;
  foot?: string;
  bodyid?: string;
  img?: string;
  pattern: string;
  bg?: string;
  txtalign?: string;

  Mpanel?: string;
  Thumbnail?: string;
  Featurette?: Featurette;

  template: string;
}
