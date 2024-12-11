import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private nextId: number = 0;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find( (t) => t.id == id);

    if (!task) throw new NotFoundException('Invalid user');

    return task;
  }

  createTask(task: Task): Task {
    if (!task.id) {
      task.id = this.nextId.toString();
      this.nextId++;
    } else {
      const id = parseInt(task.id);
      if (id > this.nextId ) this.nextId = id + 1;
    }

    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, update: Task): Task {
    const task = this.getTaskById(id);
    task.description = update.description;
    task.status = update.status;
    task.title = update.title;
    return task;
  }

  deleteTask(id: string): Task {
    const task = this.getTaskById(id);

    const indexToRemove = this.tasks.indexOf(task);
    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }

    return task;
  }
}
