import { featuretteImgtype } from '../share';
import { Featurette } from './featurette';

// can only be called once
export function initFeaturette(pattern: Featurette): Featurette {
  let css = Object.assign({}, pattern);
  css.imgcols = css.imgcols || 5;
  css.imgtype = featuretteImgtype[css.imgtype] || featuretteImgtype[0];
  return css;
}
