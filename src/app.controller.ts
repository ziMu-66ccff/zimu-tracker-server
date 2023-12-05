import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  tracker(@Req() request: Request, @Res() response: Response) {
    const buffers = [];
    request.on('data', (chunk) => {
      buffers.push(chunk);
    });
    request.on('end', () => {
      const bufferData = Buffer.concat(buffers);
      const data = JSON.parse(bufferData.toString());
      console.log(data);
      response.status(200).send('success');
    });
  }
}
