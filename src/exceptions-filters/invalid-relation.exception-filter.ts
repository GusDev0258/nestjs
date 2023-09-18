import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { InvalidRelationError } from 'src/errors/invalid-relation.error';

@Catch(InvalidRelationError)
export class InvalidRelationExceptionFilter implements ExceptionFilter {
  catch(exception: InvalidRelationError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    return response.status(422).json({
      statusCode: 422,
      message: exception.message,
    });
  }
}
