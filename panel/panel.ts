import { Featurette } from './featurette';

export interface IPanel {
  head?: string;
  body: string;
  foot?: string;
  img?: string;
  pattern: string; // raw: success, rounded, circle-5-revert, ...
  bg?: string;
  txtalign?: string;

  id: string;
  csstype: string; // 'Featurette', 'Mpanel', 'Thumbnail'
  css: string | Featurette; // success, rounded, Featurette{circle-5-revert}
  template: string;
}
