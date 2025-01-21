import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Task {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false})
  isCompleted: boolean;
}

export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
