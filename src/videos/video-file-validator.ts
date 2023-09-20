import { FileValidator } from '@nestjs/common';
import { IFile } from '@nestjs/common/pipes/file/interfaces';
import path from 'path';

export class VideoFileValidator extends FileValidator {
  isValid(file?: IFile | any): boolean | Promise<boolean> {
    console.log(file);
    return (
      file.mimetype === this.validationOptions.mimetype &&
      file.size < this.validationOptions.maxSize &&
      path.extname(file.originalname) === '.mp4'
    );
  }
  buildErrorMessage(file: any): string {
    if (!file) {
      return 'No file uploaded';
    }
    if (file.mimetype !== this.validationOptions.mimetype) {
      return `${file.mimetype} is not supported`;
    }
    if (file.size > this.validationOptions.maxSize) {
      return `File must be smaller than ${this.validationOptions.maxSize}`;
    }
  }
}
