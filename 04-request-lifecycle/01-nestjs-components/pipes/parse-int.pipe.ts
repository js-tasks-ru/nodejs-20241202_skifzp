import { PipeTransform } from "@nestjs/common";

export class ParseIntPipe implements PipeTransform {
  // @ts-ignore
  transform(value: string): number {}
}
