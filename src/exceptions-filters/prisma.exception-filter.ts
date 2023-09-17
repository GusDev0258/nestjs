import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    switch (exception.code) {
      case 'P2002':
        return response.status(409).json({
          statusCode: 409,
          message: 'Duplicate Unique Key',
        });
      case 'P2025':
        return response.status(404).json({
          statusCode: 404,
          message: exception.message,
        });
    }
    return response.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error!',
    });
  }
}
