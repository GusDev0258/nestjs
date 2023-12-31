import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import multer from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/upload/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.random().toFixed(0) + path.extname(file.originalname),
    );
  },
});
@Module({
  imports: [
    MulterModule.register({
      storage,
    }),
  ],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
