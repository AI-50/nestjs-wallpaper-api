import { Module } from '@nestjs/common';
import { BingWallpaperController } from './bing-wallpaper/bing-wallpaper.controller';
import { BingWallpaperService } from './bing-wallpaper/bing-wallpaper.service';

@Module({
  imports: [],
  controllers: [BingWallpaperController],
  providers: [BingWallpaperService],
})
export class AppModule {}
