export enum LoadingStatus {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
}

export interface IBook {
  abbrev: { pt: string; en: string };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
  timestamp: string;
}

export interface IUser {
  name?: string;
  email?: string;
  token?: string;
  notifications?: boolean;
  lastLogin?: string;
}
