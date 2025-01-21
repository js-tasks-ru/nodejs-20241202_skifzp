import { IsBoolean, IsString } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  public title?: string;

  @IsString()
  public description?: string;

  @IsBoolean()
  public isCompleted?: boolean;
}
