import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { ParseIntPipe } from "../pipes/parse-int.pipe";
import { CreateTaskDto, UpdateTaskDto } from "./task.model";
import { RolesGuard } from "../guards/roles.guard";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(":id")
  getTaskById(@Param("id", new ParseIntPipe()) id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UseGuards(RolesGuard)
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Patch(":id")
  updateTask(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() task: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(":id")
  @UseGuards(RolesGuard)
  deleteTask(@Param("id", new ParseIntPipe()) id: number) {
    return this.tasksService.deleteTask(id);
  }
}
