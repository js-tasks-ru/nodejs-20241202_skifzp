import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import mongoose from "mongoose";

@Catch(mongoose.Error.ValidationError, mongoose.mongo.MongoError)
export class MongoFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();
    let statusCode: number = exception.code;

    if (exception.code === 11000) {
      statusCode = HttpStatus.BAD_REQUEST;
    }

    response.status(statusCode).json({
      statusCode: statusCode,
      message: exception.message,
    });
  }
}
