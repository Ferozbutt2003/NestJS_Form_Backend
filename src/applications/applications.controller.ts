import { Body, Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApplicationsService } from './applications.service.js';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'profilePhoto', maxCount: 1 },
        { name: 'cnicFile', maxCount: 1 },
        { name: 'transcript', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueName = `${Date.now()}-${file.originalname}`;
            callback(null, uniqueName);
          },
        }),
      },
    ),
  )
  create(
    @Body() body: Record<string, string>,
    @UploadedFiles()
    files: {
      profilePhoto?: Express.Multer.File[];
      cnicFile?: Express.Multer.File[];
      transcript?: Express.Multer.File[];
    },
  ) {
    return this.applicationsService.create(body, files);
  }
}