import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { BingWallpaperService } from './bing-wallpaper.service';
import { TGetBingWallpaperDto, getBingWallpaperSchema } from './interfaces';
import { ZodValidationPipe } from 'src/validation.pipe';

@Controller('bing-wallpaper')
export class BingWallpaperController {
  constructor(private readonly bingWallpaperApi: BingWallpaperService) { }

  @Post()
  @UsePipes(new ZodValidationPipe(getBingWallpaperSchema))
  getBingWallpaper(@Body() filter: TGetBingWallpaperDto): string {
    console.log(filter);
    return 'Hello World!';
  }

  @Get('newest')
  getNewestWallpaper() {
    return this.bingWallpaperApi.getNewestBingWallpaper();
  }

  @Get('synchronize')
  synchronizeWeeklyBingWallpaper() {
    return this.bingWallpaperApi.SynchronizeWeeklyBingWallpaper();
  }
}
