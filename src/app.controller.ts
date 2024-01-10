import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  trackedDataReport(@Req() request: Request) {
    const buffers = [];
    request.on('data', (chunk) => {
      buffers.push(chunk);
    });
    request.on('end', () => {
      const bufferData = Buffer.concat(buffers);
      const data = JSON.parse(bufferData.toString());
      this.appService.saveTrackedData(data);
    });
  }

  @Post('uploadFile')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          try {
            fs.mkdirSync(path.join(process.cwd(), 'public/uploads'));
          } catch (e) {}

          cb(null, path.join(process.cwd(), 'public/uploads'));
        },
        filename: function (req, file, cb) {
          const uniqueSuffix =
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '-' +
            file.originalname;
          cb(null, file.fieldname + '-' + uniqueSuffix);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    console.log('body', body);
    console.log('file', file);
  }
}
