import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { appendFileSync } from "node:fs";

const ERROR_LOG_FILE_NAME = 'errors.log';

@Catch(Error, HttpException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const time = new Date().toISOString();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = typeof exception.getStatus === 'function' ? exception.getStatus() : 500;
    appendFileSync(ERROR_LOG_FILE_NAME, `[${time}] ${status} - ${exception.message}\n`);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}
