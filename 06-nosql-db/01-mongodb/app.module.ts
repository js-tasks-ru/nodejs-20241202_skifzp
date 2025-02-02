import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1/06-db-01-mongodb", {
      readPreference: 'secondaryPreferred',
    }),
    TasksModule,
  ],
})
export class AppModule {}
