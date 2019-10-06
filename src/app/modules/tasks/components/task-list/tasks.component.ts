import { Component, OnInit } from '@angular/core';

import { TaskDataService } from '../../../../shared/services/task-data.service';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  
  getTasks() : void {
    this.taskDataService.getTasks().subscribe(
      t => (this.tasks = t)
    );
  }

  constructor(private taskDataService : TaskDataService) { }

  ngOnInit() {
    this.getTasks();
  }

}
