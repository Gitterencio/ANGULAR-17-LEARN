import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los Juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input('Username') username: string = '';
  @Output('AddFavorite') AddFavoriteEvent: EventEmitter<string> =
    new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Horizon Zero Dawn',
    },
    {
      id: 3,
      name: 'Super Smash Bros Ultimate',
    },
  ];

  fav(gameName: string) {
    this.AddFavoriteEvent.emit(gameName);
  }
}
