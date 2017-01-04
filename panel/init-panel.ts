import { mpanelType, thumbnailType, featuretteImgtype } from '../share';
import { Featurette } from './featurette';
import { IPanel } from './panel';

// circle-5-revert
const featuretteParseRe = /^(rounded|circle|thumbnail)-(\d{0,2})(-revert)?$/;

export function initPanel(panel: IPanel): IPanel {
  panel.pattern = panel.pattern || '';
  let match: RegExpMatchArray;
  if (~mpanelType.indexOf(panel.pattern)) {
    panel.csstype = 'Mpanel';
    panel.css = panel.pattern;
  } else if (~thumbnailType.indexOf(panel.pattern)) {
    panel.csstype = 'Thumbnail';
    panel.css = panel.pattern;
  } else if (match = panel.pattern.match(featuretteParseRe)) {
    let imgcols = +match[2];
    panel.css = {
      imgtype: match[1],
      imgcols: imgcols > 0 && imgcols < 12 ? imgcols : 5,
      revert: !!match[3],
    };
    panel.csstype = 'Featurette';
  } else {
    panel.csstype = 'Mpanel';
    panel.css = 'default';
  }
  return panel;
}