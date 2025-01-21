import { IsString } from "class-validator";

export class CreateTaskDto {
  public title: string;
  public description: string;
}
