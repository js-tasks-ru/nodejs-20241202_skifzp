import { PartialType } from "@nestjs/mapped-types";
import { PickType } from "@nestjs/swagger";
import { Task } from "../entities/task.entity";

export class UpdateTaskDto extends PartialType(
  PickType(Task, ["id", "title", "description", "isCompleted"] as const),
) {}
