import { BadRequestException, Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getFilteredTasks(
    status?: TaskStatus,
    page?: number,
    limit?: number,
  ): Task[] {
    let result = [];

    if (!validatePagination(page)) throw new BadRequestException(`Page should be more than 0`);
    if (!validatePagination(limit)) throw new BadRequestException(`Limit should be more than 0`);
    if (status !== undefined && !Object.values(TaskStatus).includes(status as TaskStatus)) throw new BadRequestException(`Unexpected value of status`);

    page = parseInt(String(page || 1));
    limit = parseInt(String(limit || 0));
    let from = (page === 1) ? 0 : (limit || 1) * (page || 1) - 1;
    const filteredTasks = status ? this.tasks.filter( (t) => t.status === status) : this.tasks;

    if (limit) result = filteredTasks.slice(from, from + limit);
    else result = filteredTasks.slice(from);

    return result;
  }
}

function validatePagination(size: number | undefined): boolean {
  if (size === undefined) return true;
  return parseInt(String(size)) > 0;
}