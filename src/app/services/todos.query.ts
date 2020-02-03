import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { TodosState, TodosStore } from 'src/app/services/todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState> {

  public selectVisibleTodo$ = combineLatest(
    this.selectAll()
  );

  constructor(
    protected store: TodosStore
  ) {
    super(store);
  }
}
