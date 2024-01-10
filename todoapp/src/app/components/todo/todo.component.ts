import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { FilterType, TodoModel } from '../../models/todo';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoList = signal<TodoModel[]>([]);
  //{
  //  id: 1,
  //  title: 'Buy something',
  //  completed: false,
  //  editing: false,
  //},
  //{
  //  id: 2,
  //  title: 'Buy bread',
  //  completed: true,
  //  editing: false,
  //},
  //{
  //  id: 3,
  //  title: 'Buy cheese',
  //  completed: false,
  //  editing: false,
  //},
  filter = signal<FilterType>('all');

  todoListFiltered = computed(() => {
    const filter = this.filter();
    const todos = this.todoList();
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  });

  newTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  constructor() {
    effect(() => {
      //se dispara cada vez que el todoList(signal) cambia
      localStorage.setItem('todos',JSON.stringify(this.todoList()))
    });
  }

  ngOnInit(): void {
    //se dispara antes del effect
    const storage = localStorage.getItem('todos');
    if (storage){
      this.todoList.set(JSON.parse(storage));
    }
  }

  addTodo() {
    const newTodoTitle = this.newTodo.value.trim();
    if (this.newTodo.valid && newTodoTitle !== '') {
      this.todoList.update((prev_todos) => {
        return [
          ...prev_todos,
          {
            id: Date.now(),
            title: newTodoTitle,
            completed: false,
          },
        ];
      });

      this.newTodo.reset();
    } else {
      this.newTodo.reset();
    }
  }

  toggleTodo(todoId: number) {
    this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  }

  removeTodo(todoId: number) {
    this.todoList.update((prev_todos) =>
      prev_todos.filter((todo) => todo.id !== todoId)
    );
  }

  saveTitleTodo(todoId: number, event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {
        return todo.id === todoId ? { ...todo, title, editing: false } : todo;
      })
    );
  }
}
