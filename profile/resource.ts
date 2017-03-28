import { ISite } from './site';

export interface IResource {
  ID: number;
  TLS: boolean;
  Mount: number;
  CreatedAt: number;
  Expires: number;
}

// used by bongin
export interface ResourceSite {
  Resource: IResource;
  Site: ISite;
}
