import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./entities/task.entity";
import { ParseIntPipe } from "../pipes/parse-int.pipe";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", new ParseIntPipe()) id: number): Promise<Task>  {
    return this.tasksService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() updateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(":id")
  remove(@Param("id", new ParseIntPipe()) id: number): Promise<{ message: string }> {
    return this.tasksService.remove(id);
  }
}
