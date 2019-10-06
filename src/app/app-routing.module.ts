import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './modules/tasks/components/task-list/tasks.component';
import { TaskAddComponent } from './modules/tasks/components/task-add/task-add.component';



const routes: Routes = [
  
  {
    path: "list",
    component: TasksComponent
  },
  {
    path: "add",
    component: TaskAddComponent
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
