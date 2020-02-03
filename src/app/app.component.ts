import { ID } from '@datorama/akita';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodosQuery } from './services/todos.query';
import { TodoService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public todo$: Observable<Todo[]>;

  constructor(
    private todoService: TodoService,
    private todosQuery: TodosQuery,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.todo$ = this.todosQuery.selectAll();
  }

  public add(input: HTMLInputElement): void {
    this.todoService.add(input.value);
    input.value = '';
    this.cdr.detectChanges();
  }

  public delete(id: ID): void {
    this.todoService.remove(id);
  }

  public completed(todo: Todo): void {
    this.todoService.update(todo);
  }
}
