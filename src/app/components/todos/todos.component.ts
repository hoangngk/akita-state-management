import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ID } from '@datorama/akita';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @Input() todos: Todo[];
  @Output() delete = new EventEmitter<ID>();
  @Output() completed = new EventEmitter<Todo>();

  public trackByFn(index: number, todo: Todo): string {
    return todo.id;
  }
}
