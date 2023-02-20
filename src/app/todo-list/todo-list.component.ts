import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDo } from '../interfaces/todo';
import { TodoRepoService } from './todo-repo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: IToDo[] = [];
  showAddTask: boolean = false;
  addTaskButtonText: string = "Add Task"


  constructor(private todoRepo: TodoRepoService){}

  ngOnInit(): void {
    this.tasks = this.todoRepo.getAllTasks();
  }

  addTask(form:NgForm){
    var taskAdd = <IToDo>{
      id : this.tasks.length+1,
      task : form.form.value.task,
      completed : false
    }
      this.tasks.push(taskAdd)
      form.resetForm();       
  }
  
  completeTask(id: number){
    let taskToUpdate = this.tasks.filter(x => x.id === id)[0]
    if(taskToUpdate.completed){
      taskToUpdate.completed=false;
    }else{
      taskToUpdate.completed=true;
    }
  }

  removeTask(id: number){
    let taskToUpdate = this.tasks.filter(x => x.id === id)[0]
    let taskIndex = this.tasks.indexOf(taskToUpdate, 0);
    if(taskIndex > -1){
      this.tasks.splice(taskIndex,1);
    }
  }

  toggleInfo(): void {
    this.showAddTask = !this.showAddTask;
    if(this.showAddTask) {
      this.addTaskButtonText = "Cancel Add Task";
    }
    else
    {
      this.addTaskButtonText = "Add Task"
    }   
  }
}
