import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { map, Observable, tap } from "rxjs";

@Injectable()
export class ApiVersionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const executionTime = Date.now() - now;

    return next.handle().pipe(
      map((data) => ({
        ...data,
        apiVersion: "1.0",
        executionTime: `${executionTime}ms`,
      })),
      tap(() => console.log(`Execution time is ${executionTime}ms`)),
    );
  }
}
