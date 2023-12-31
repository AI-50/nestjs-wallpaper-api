import {
  EFormat,
  EMkt,
  IBingWallpaperFilter,
  IBingWallpaperItem,
} from './interfaces';

const BING_URI_BASE = 'http://www.bing.com';

export const getBingWallpaperByFilter = async (
  filter?: IBingWallpaperFilter,
): Promise<IBingWallpaperItem[]> => {
  const { n = 1, mkt = EMkt.zhCN, format = EFormat.json } = filter!;
  const uri = `${BING_URI_BASE}/HPImageArchive.aspx?format=${format}&idx=0&n=${n}&mkt=${mkt}`;
  const data = await fetch(uri).then((res) => res.json());
  return data['images'];
};
