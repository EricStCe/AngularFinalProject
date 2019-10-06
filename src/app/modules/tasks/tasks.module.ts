import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './components/task-list/tasks.component';
import { TaskDataService } from '../../shared/services/task-data.service';
import { TaskAddComponent } from './components/task-add/task-add.component';


@NgModule({
  declarations: [TasksComponent, TaskAddComponent],
  imports: [
    CommonModule
  ],
  exports: [TasksComponent, TaskAddComponent ],
  providers:[TaskDataService]
})
export class TasksModule { }
