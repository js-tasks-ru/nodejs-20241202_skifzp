import { PartialType, PickType } from "@nestjs/swagger";
import { Task } from "../entities/task.entity";

export class CreateTaskDto extends PartialType(
  PickType(Task, ["title", "description"] as const),
) {}
