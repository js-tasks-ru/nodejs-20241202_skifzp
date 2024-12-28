import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RolesGuard implements CanActivate {
  // @ts-ignore
  canActivate(context: ExecutionContext) {}
}
