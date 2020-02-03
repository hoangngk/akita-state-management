import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ID } from '@datorama/akita';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Todo } from './../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;

  @Output() completed = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  public control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((completed: boolean) => {
        this.completed.emit({ ...this.todo, completed });
      });
  }

  ngOnDestroy(): void { }

}
