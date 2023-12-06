import { z } from 'zod';

export interface IBingWallpaperItem {
  startdate: string;
  fullstartdate: string;
  enddate: string;
  url: string;
  urlbase: string;
  copyright: string;
  copyrightlink: string;
  title: string;
  quiz: string;
  wp: boolean;
  hsh: string;
  drk: number;
  top: number;
  bot: number;
  hs?: any;
}

export interface IBingWallpaperFilter {
  n?: number;
  mkt?: EMkt;
  format?: EFormat;
  resolution?: EResolution;
}

export interface IBingWallpaperResponse {
  images: IBingWallpaperItem[];
}

export enum EMkt {
  enUS = 'en-US',
  zhCN = 'zh-CN',
}

export enum EResolution {}
export enum EFormat {
  json = 'js',
  xml = 'xml',
  rss = 'rss',
}

export enum EResolution {
  _1366x768 = '1366x768',
  _1920x1080 = '1920x1080',
  UHD = 'UHD',
}

export const getBingWallpaperSchema = z.object({
  startTimestamp: z.number(),
  endTimestamp: z.number(),
});

export type TGetBingWallpaperDto = z.infer<typeof getBingWallpaperSchema>;
