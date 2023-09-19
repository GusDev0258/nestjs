import { FileValidator } from '@nestjs/common';
import { IFile } from '@nestjs/common/pipes/file/interfaces';

export class VideoFileValidator extends FileValidator {
  isValid(
    file?: IFile | IFile[] | Record<string, IFile[]>,
  ): boolean | Promise<boolean> {}
  buildErrorMessage(file: any): string {}
}
