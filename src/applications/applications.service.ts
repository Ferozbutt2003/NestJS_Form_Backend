import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity.js';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(
    data: Partial<Application>,
    files: {
      profilePhoto?: Express.Multer.File[];
      cnicFile?: Express.Multer.File[];
      transcript?: Express.Multer.File[];
    },
  ): Promise<Application> {
    const application = this.applicationRepository.create({
      ...data,
      profilePhotoPath: files.profilePhoto?.[0]?.path,
      cnicFilePath: files.cnicFile?.[0]?.path,
      transcriptPath: files.transcript?.[0]?.path,
    });
    return this.applicationRepository.save(application);
  }
}