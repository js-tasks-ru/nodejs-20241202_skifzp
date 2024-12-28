import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string): number {
    const num = parseInt(value);

    if (isNaN(num)) throw new BadRequestException (`"${value}" не является числом.`);

    return num;
  }
}
