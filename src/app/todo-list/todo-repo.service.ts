import { Injectable } from '@angular/core';
import { IToDo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRepoService {

  toDoList : IToDo[] = [
    {id: 1, task: "Make Bed", completed: true},
    {id: 2, task: "Clean Kitchen", completed: true},
    {id: 3, task: "Pick Up Groceries", completed: false},
    {id: 4, task: "Pay Bills", completed: true},
    {id: 5, task: "Mow Yard", completed: false},
    {id: 6, task: "Call Mom", completed: false},
    {id: 7, task: "Get Angular Todo List Lab Done", completed: true},

  ]
  constructor() { }

  getAllTasks(): IToDo[]{
    return this.toDoList;
  }

  getTaskByID(id:number) : IToDo {
    return this.toDoList[id];
  }
}
