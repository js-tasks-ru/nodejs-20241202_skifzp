import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

export class ApiVersionInterceptor implements NestInterceptor {
  // @ts-ignore
  intercept(context: ExecutionContext, next: CallHandler) {}
}
