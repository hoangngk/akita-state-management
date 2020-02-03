import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { createTodo } from 'src/app/models/todo.model';
import { Todo } from './../models/todo.model';
import { TodosStore } from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private todosStore: TodosStore
  ) { }

  public add(title: string): void {
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  public remove(id: ID): void {
    this.todosStore.remove(id);
  }

  public update(todo: Todo): void {
    this.todosStore.update(todo.id, { completed: todo.completed });
  }
}
